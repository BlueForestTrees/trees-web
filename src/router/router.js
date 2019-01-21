import {GO} from "../const/go"
import Vue from 'vue'
import VueRouter from 'vue-router'

const NotFound = () => import(/* webpackChunkName: "NotFound" */ "../vue/NotFound")
const Tree = () => import(/* webpackChunkName: "Tree" */ '../vue/tree/Tree.vue')
const Equivalence = () => import(/* webpackChunkName: "Equivalence" */ '../vue/equivalence/Equivalence')
const Qui2 = () => import(/* webpackChunkName: "Qui2" */ '../vue/jeu/QuiDeuxFoisPlus')
const Selection = () => import (/* webpackChunkName: "Selection" */ '../vue/basket/Selection')
const Root = () => import(/* webpackChunkName: "Root" */ '../vue/tree/Root')
const SearchPage = () => import(/* webpackChunkName: "Search" */ '../vue/search/SearchPage')
const BlueForest = () => import(/* webpackChunkName: "BlueForest" */ '../vue/BlueForest')
const Compare = () => import(/* webpackChunkName: "Compare" */ '../vue/compare/Compare')
const Confirmation = () => import(/* webpackChunkName: "Confirmation" */ '../vue/user/Confirmation')
const Inscription = () => import(/* webpackChunkName: "Inscription" */ '../vue/user/Inscription')
const Login = () => import(/* webpackChunkName: "Login" */ '../vue/user/Login')
const Plan = () => import(/* webpackChunkName: "Plan" */ '../vue/plan/Plan')
const RoadMap = () => import(/* webpackChunkName: "RoadMap" */ '../vue/plan/RoadMap')
const BFCestQuoi = () => import(/* webpackChunkName: "BFCestQuoi" */ '../vue/plan/PlanIntro')
const CreateTree = () => import(/* webpackChunkName: "CreateTree" */ '../vue/tree/CreateTree')
const DatasExplained = () => import(/* webpackChunkName: "DatasExplained" */ '../vue/explain/DataExplained')
const MyTeam = () => import(/* webpackChunkName: "MyTeam" */ '../vue/home/MyTeam')
const MyMessages = () => import(/* webpackChunkName: "MyMessages" */ '../vue/home/MyMessage')
const AddImpactEntry = () => import(/* webpackChunkName: "AIE" */ '../vue/dialog/AddImpactEntry')
const AddFacetEntry = () => import(/* webpackChunkName: "AFEDialog" */ "../vue/dialog/AddFacetEntry")
const AddRessource = () => import(/* webpackChunkName: "ARDialog"*/ "../vue/dialog/AddRessourceDialog")
const PubEquiv = () => import(/* webpackChunkName: "PubE"*/ "../vue/pub/PubEquiv")
const CreateInfo = () => import(/* webpackChunkName: "Info"*/ "../vue/pub/CreateInfo")
const CreateEq = () => import(/* webpackChunkName: "CreateEq"*/ "../vue/pub/CreateEq")
const CreateCompens = () => import(/* webpackChunkName: "CreateCompens"*/ "../vue/pub/CreateCompens")
const CreateAlt = () => import(/* webpackChunkName: "CreateAlt"*/ "../vue/pub/CreateAlt")

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: "/",
    routes: [
        {
            path: "/", component: BlueForest,
            children: [
                {name: GO.SEARCH, path: "", component: SearchPage},
                {name: GO.PLAN_INTRO, path: "/plan/intro", component: BFCestQuoi},
                {name: GO.PLAN, path: "/plan", component: Plan},
                {name: GO.TEAM, path: "/equipe", component: MyTeam},
                {name: GO.MESSAGE, path: "/message", component: MyMessages},
                {name: GO.ROAD_MAP, path: 'roadmap', component: RoadMap},
                {name: GO.DATA_EXPLAINED, path: 'explain/datas', component: DatasExplained},
                {name: GO.CREATE_TREE, path: "create/tree", component: CreateTree},


                {name: GO.TREE, path: "tree/:bqt/:_id", component: Tree, props: (route) => ({_id: route.params._id, bqt: Number(Number.parseFloat(route.params.bqt))})},
                {name: GO.SELECTION, path: "sel/:_id", component: Tree, props: (route) => ({sid: route.params._id})},

                {name: GO.EQUIV, path: "equiv/:bqt/:_id/:sbqt/:s_id", component: Equivalence, props: true},

                {name: GO.CREATE_INFO, path: "info", component: CreateInfo},
                {name: GO.PUB_EQUIV, path: "info/:_id", component: PubEquiv, props: true},
                {name: GO.CREATE_EQUIV, path: "create/eq", component: CreateEq},
                {name: GO.CREATE_COMPENS, path: "create/co", component: CreateCompens},
                {name: GO.CREATE_ALT, path: "create/alt", component: CreateAlt},

                {name: GO.QUI_2, path: "qui2fois/:bqt/:_id/:sbqt/:s_id", component: Qui2, props: true},
                {name: GO.TREE_EMPTY, path: "tree", component: Tree},
                {name: GO.ROOT, path: "root/:treeId/:rootId", component: Root, props: true},
                {name: GO.BASKET, path: "selection", component: Selection},
                {name: GO.COMPARE_EMPTY, path: "compare", component: Compare},
                {name: GO.COMPARE_PARTIAL, path: "compare/:leftId", component: Compare, props: true},
                {name: GO.ADD_IMPACT_ENTRY, path: "add/entry/impact", component: AddImpactEntry},
                {name: GO.ADD_FACET_ENTRY, path: "add/entry/facet", component: AddFacetEntry},
                {name: GO.ADD_RESSOURCE, path: "add/ressource", component: AddRessource},
                {name: GO.COMPARE, path: "compare/:leftId/:rightId", component: Compare, props: true},
                {name: GO.NOT_FOUND, path: '/404', component: NotFound},
            ]
        },
        {name: GO.LOGIN, path: "/login", component: Login},
        {name: GO.SUSCRIBE, path: "/suscribe", component: Inscription},
        {name: GO.CONFIRM, path: "/confirm/:token", component: Confirmation, props: true},
        {path: '*', redirect: '/404'},
    ]
})
