import {map, bqtGToQtUnit, bestQuantity, unitCoef, changeUnit, grandeur, baseQt, find} from "unit-manip"
import {entryKeyFromFragmentName} from "../const/fragments"
import {selectionNameMaxLength} from "../const/validation"

export const remove = (source, filter) => {
    const dest = []
    for (let i = 0; i < source.length; i++) {
        if (!filter(source[i])) {
            dest.push(source[i])
        }
    }
    return dest
}
export const isNil = v => v === null || v === undefined
export const notNil = v => !isNil(v)
export const createStringObjectId = () => (new Date().getTime() / 1000 | 0).toString(16) + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, () => (Math.random() * 16 | 0).toString(16)).toLowerCase()

export const hasQuantity = e => e && e.quantity && e.quantity.bqt && e.quantity.g
export const transportQuantity = (masse, distance) => baseQt({qt: changeUnit(masse, "t") * changeUnit(distance, "km"), unit: "t*km"})
export const treefyAll = items => map(items, treefy)
export const treefy = trunk => ({_id: trunk._id, trunk})

export const qtUnit = (item, opts = {}) => {
    const bqtG = quantity(item)
    if (bqtG) {
        const qtUnit = bqtGToQtUnit(bqtG, item.coef || opts.coef)
        if (!isNil(qtUnit.qt) && qtUnit.unit) {
            const best = bestQuantity(qtUnit)
            return `${(best.qt === 1 && opts.hideOne) ? '' : best.qt} ${grandeur(best.unit) !== "Nomb" ? best.unit : ''}`
        } else {
            return `${isNil(qtUnit.qt) ? "?" : qtUnit.qt} ${qtUnit.unit || " ?"}`
        }
    } else {
        return "??"
    }
}

export const qt = (item, coef = 1) => coef * quantity(item).bqt

export const quantity = item => item && (
    (item.selection && item.selection.repeted && item.selection.duree)
    ||
    (item.selection && item.selection.quantity)
    ||
    (item.repeted && item.duree)
    ||
    item.quantity
    ||
    (item.trunk && item.trunk.quantity)
    ||
    item
)

export const qtFreq = selection => selection && selection.repeted ? `${qtUnit(selection.quantity)} / ${qtUnit(selection.freq, {hideOne: true})}` : ""

export const qtFreqOrUnit = item => qtFreq(item) || qtUnit(item)

export const name = (item, def) =>
    item && item.selection && item.selection.name
    || item && item.trunk && item.trunk.name
    || item && item.name
    || def
    || ''

const regex = /^[AEIOUY1]/i
export const de = name => {
    const startVoyelle = name && name.match(regex)
    return `d${startVoyelle ? "'" : "e "}${name}`
}

// pas de "de" ou "d'" pour "1 apéro"
// export const dename = item => quantity(item).g !== "Nomb" && de(name(item)) || name(item)

export const color = item => item.color || item.trunk.color
export const equiv = item => item.eq ? `éq. ${item.eq}` : ""
export const qtUnitName = (item, coef = 1) => item && `${qtUnit(item, {coef})} ${equiv((item.trunk && item.trunk.quantity) || item.quantity || item)} ${name(item)}`

export const getRandomColor = () => {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

const getLuma = value => {
    const c = value.substring(1)
    const rgb = parseInt(c, 16)
    const r = (rgb >> 16) & 0xff
    const g = (rgb >> 8) & 0xff
    const b = (rgb >> 0) & 0xff

    return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

export const shadeColor = (color, percent) => {
    const f = parseInt(color.slice(1), 16), t = percent < 0 ? 0 : 255, p = percent < 0 ? percent * -1 : percent, R = f >> 16, G = f >> 8 & 0x00FF, B = f & 0x0000FF
    return "#" + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1)
}

export const overcolor = c => getLuma(c) < 120 ? "white" : "black"

export const initiales = fullname => {
    const nameSplit = fullname.toUpperCase().split(' ')
    if (nameSplit.length === 1) {
        return nameSplit[0] ? nameSplit[0].charAt(0) : '?'
    } else {
        return nameSplit[0].charAt(0) + nameSplit[1].charAt(0)
    }
}

export const rad = deg => deg * (Math.PI / 180)

export const range = (min, max) => {
    let array = [], j = 0
    for (let i = min; i <= max; i++) {
        array[j] = i
        j++
    }
    return array
}

export const add = (q1, q2) => ({
    qt: unitCoef(q1.unit, q2.unit) * q1.qt + q2.qt,
    unit: q2.unit
})

export const applyRessourceCoef = (coef, items) => {
    if (items) {
        for (let i = 0; i < items.length; i++) {
            if (items[i].trunk) {
                items[i].trunk.quantity.bqt *= coef
            }
        }
        return items
    }
}
export const applyAspectCoef = (coef, items) => {
    if (items) {
        for (let i = 0; i < items.length; i++) {
            items[i].quantity.bqt *= coef
        }
        return items
    }
}

export const applyAxisCoef = (coef, items, prop) => {
    for (let i = 0; i < items.length; i++) {
        if (prop) {
            items[i][prop].bqt *= coef
        } else {
            items[i].bqt *= coef
        }
    }
    return items
}

export const applySelectionCoef = (coef, selection) => {
    if (selection) {
        if (selection.repeted) {
            applyAxisCoef(coef, [selection], "duree")
        } else {
            applyAspectCoef(coef, [selection])
        }
    }
}

export const deltaTime = time => {
    if (!time) return ""
    const delta = (Date.now() - new Date(time)) / 1000
    return delta < 30 ?
        `à l'instant`
        :
        "il y a " + (
            delta < 60 ?
                `${Math.floor(delta)} sec`
                :
                delta < 3600 ?
                    `${Math.floor(delta / 60)} min`
                    :
                    delta < 24 * 3600 ?
                        `${Math.floor(delta / 3600)} h`
                        :
                        delta < 7 * 24 * 3600 ?
                            `${Math.floor(delta / (24 * 3600))} j`
                            :
                            delta < 4 * 7 * 24 * 3600 ?
                                `${Math.floor(delta / (7 * 24 * 3600))} sem`
                                :
                                delta < 12 * 4 * 7 * 24 * 3600 ?
                                    `${Math.floor(delta / (4 * 7 * 24 * 3600))} mois`
                                    :
                                    `${Math.floor(delta / (12 * 4 * 7 * 24 * 3600))} an`)

}

export const monthYear = date => new Date(date).toLocaleDateString()

const possible = "abcdefghijklmnopqrstuvwxyz0123456789"
export const generateXRequestId = () => {
    let xRequestId = ""

    for (let i = 0; i < 32; i++)
        xRequestId += possible.charAt(Math.floor(Math.random() * possible.length))

    return xRequestId
}

export const selectionBqt = selection =>
    selection.repeted ?
        selection.quantity.bqt * (selection.duree.bqt / selection.freq.bqt)
        :
        selection.quantity.bqt

export const coefFromTrunkToSelection = (selection, tree) => selectionBqt(selection) / tree.trunk.quantity.bqt
export const treeBqt = tree => tree.selection ? selectionBqt(tree.selection) : tree.trunk.quantity.bqt

//in: une liste d'arbre, un nom de fragment
//out: un objet {_id:attrDeArbre1} avec tous les attributs en communs sur tout les arbres.
export const extractCommons = (trees, fragment) => {
    const entryKey = entryKeyFromFragmentName[fragment]
    const treesFragment =
        trees.map(tree =>
            tree[fragment].reduce(
                (treeFragment, attribute) => Object.assign(treeFragment, {[attribute[entryKey]]: attribute}), {}
            )
        )

    let commons = []
    const firstTreeFragment = treesFragment[0]
    for (let key in firstTreeFragment) {
        if (inAll(treesFragment, key) && allValued(treesFragment, key)) {
            commons.push({_id: key, type: fragment, name: firstTreeFragment[key].name})
        }
    }
    return commons
}

const inAll = (treesFragment, key) => {
    for (let treeFragment of treesFragment) {
        if (!treeFragment.hasOwnProperty(key)) return false
    }
    return true
}
const allValued = (treesFragment, key) => {
    for (let treeFragment of treesFragment) {
        if (!hasQuantity(treeFragment[key])) return false
    }
    return true
}

export const attributeCoef = (leftAttribute, rightAttribute) => (quantity(leftAttribute).bqt / quantity(rightAttribute).bqt)

export const getFragment = (tree, {type, _id}) => tree[type] && find(tree[type], entryKeyFromFragmentName[type], _id)

export const selectionFromTree = tree => {
    if (!tree.selection) {
        tree.selection = {
            trunkId: tree._id,
            quantity: tree.trunk.quantity,
            name: tree.trunk.name.substr(0, selectionNameMaxLength),
            repeted: false
        }
    }
    return tree.selection
}
export const formatDate = value => new Date(value).toLocaleString()

export const lowFirst = s => s.charAt(0).toLowerCase() + s.slice(1)

export const mergeQt = (qt1, qt2) => ({bqt: qt1.bqt + qt2.bqt, g: qt1.g})

export const findFct = function (array, fct) {
    const length = array.length
    for (let i = 0; i < length; i++) {
        if (fct(array[i])) {
            return array[i]
        }
    }
}

export const sortOn = sortKey => data => {
    return data && Array.isArray(data) && data.sort((a, b) => a[sortKey].localeCompare(b[sortKey]))
        ||
        data
}

export const filterOn = filterKey => (data, filter) => filterKey && data && filter ?
    data.filter(i => RegExp(filter.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'i').test(i[filterKey]))
    :
    data