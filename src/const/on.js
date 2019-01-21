export default {
    ADD_TO_BASKET: 'addToBasket',
    ADD_SELECTION_TO_BASKET: 'addSelectionToBasket',
    ADD_TRANSPORT: 'addTransport',
    ALIGN_FRAGMENT: 'alignFragment',
    APPLY_QUANTITY_COEF: 'applyQtCoef',
    APPLY_SELECTION: 'applySelection',
    CHANGE_COMPARE_QUANTITY: 'changeCompareQuantity',
    CHECK_AUTH: "checkAuth",
    CHECK_OWNERSHIP: "checkOwnership",
    CHECK_NAME_AVAILABLE: "checkNameAvailable",
    CLEAR_SEARCH: 'clearSearch',
    CLONE_TREE: "cloneTree",
    CLONE_TRUNK: "cloneTrunk",
    CONFIRM_SUSCRIBE: 'CONFIRM_SUSCRIBE',
    COUNT_MESSAGES: "countMessages",
    CREATE_FACET_ENTRY: 'onCreateFacetEntry',
    CREATE_IMPACT_ENTRY: 'onCreateImpactEntry',
    CREATE_TRUNK: 'createTrunk',
    CREATE_ROOT: 'createRoot',
    CREATE_BRANCH: 'createBranch',
    CREATE_LINK: 'createLink',
    DELETE_FACETS: 'deleteFacets',
    DELETE_IMPACTS: 'deleteImpacts',
    DELETE_BRANCH: 'deleteBranch',
    UPDATE_BRANCH: 'updateBranch',
    DARK_FROM_STORAGE: 'darkFromStorage',
    DELETE_TREE: 'deleteTree',
    DELETE_ROOT: 'deleteRoot',
    DELETE_MESSAGE: 'deleteMessage',
    DELETE_REPLY: 'deleteReply',
    UPDATE_ROOT: 'updateRoot',
    EXCEPTION: 'exception',
    SWITCH_LEFT_MENU: 'switchLeftMenu',
    GO_IMPACT_ENTRY: 'goImpactEntry',
    GO_FACET_ENTRY: 'goFacetEntry',
    GO_CREATE_TREE: "goCreateTree",
    GO_CREATE_INFO: 'goCreateInfo',
    GO_EQUIV: "goEquiv",
    GO_QUI_DEUX_FOIS_PLUS: "goQui2",
    GO_HOME: 'goHome',
    GO_TREE: 'goTree',
    GO_ANY: 'goAny',
    GO_SELECTION: 'goSelection',
    GO_ROOT: 'goRoot',
    GO_BASKET: 'goBasket',
    GO_COMPARE: 'goComp',
    GO_SEARCH: 'goSearch',
    GO_TO: 'goTo',
    IMPORT_TRUNK_ADEME: 'importTrunkAdeme',
    IMPORT_CATEGORIE_ADEME: 'importCategorieAdeme',
    IMPORT_IMPACT_ENTRY_ADEME: 'importImpactEntryAdeme',
    IMPORT_IMPACT_ADEME: 'importImpactAdeme',
    INIT_X_REQUEST_ID: 'initCorrelationId',
    load: fragment => `load${fragment[0].toUpperCase() + fragment.slice(1)}`,
    LOAD_CATEGORIES: 'loadCategories',
    LOAD_FACETS: 'loadFacets',
    LOAD_IMPACTS: 'loadImpacts',
    LOAD_IMPACTS_TANK: 'loadImpactsTank',
    LOAD_DAMAGES: 'loadDamages',
    LOAD_DAMAGES_TANK: 'loadDamagesTank',
    LOAD_BRANCHES: 'loadBranches',
    LOAD_GRANDEUR: 'loadGrandeurs',
    LOAD_MESSAGES: 'loadMesages',
    LOAD_OPEN_TREE: 'loadOpenTree',
    LOAD_TRUNK: 'loadTrunk',
    LOAD_ROOTS: 'loadRoots',
    LOAD_TANK: 'loadTank',
    LOAD_USER: 'loadUser',
    LOAD_BASKET: 'loadBasket',
    LOAD_SELECTIONS: 'loadSelections',
    LOAD_SELECTION: 'loadSelection',
    LOGIN: 'login',
    LOGOUT: 'logout',
    MOUNT_APP: 'mountApp',
    LOAD_TREE: 'loadTree',
    RENAME_TRUNK: 'renameTrunk',
    REFRESH_MY_MESSAGES: 'refreshMyMessages',
    REFRESH_ROOTS: 'refreshRoots',
    REFRESH_TREE: 'refreshTree',
    REMOVE_SELECTION_FROM_BASKET: 'removeSelectionFromBasket',
    REMOVE_FROM_BASKET: 'removeFromBasket',
    RESPOND_MESSAGE: 'respondMessage',
    PUT_TRUNK_QUANTITY: "putTrunkQuantity",
    SAVE_INFO: "saveInfo",
    SAVE_BASKET: 'saveBasket',
    SEARCH_TREE: 'searchTree',
    SEARCH_FACET_ENTRY: 'searchFacetEntry',
    SEARCH_IMPACT_ENTRY: 'searchImpactEntry',
    SEARCH_EQUIV: 'searchEquiv',
    SELECT_CONSULT: 'selectConsult',
    SEND_MESSAGE: 'sendMessage',
    SHOW_DIALOG: 'showDialog',
    SHOW_MESSAGES: 'showMessages',
    SNACKBAR: 'snackbar',
    SWIPE_LEFT: 'SWIPE_LEFT',
    SWIPE_RIGHT: 'SWIPE_RIGHT',
    SWITCH_COLORS: 'switchColors',
    TOGGLE_SELECT: 'toggleSelect',
    UNSELECT: 'unselect',
    UPDATE_MESSAGE: 'updateMessage',
    UPDATE_TREE: 'updateTree',
    UPDATE_TREES: 'updateTrees',
    UPDATE_REPLY: 'updateReply',
    USER_FROM_STORAGE: 'restoreUserFromStorage',
    USER_TO_STORAGE: 'userToStorage',
    VOTE_FOR: "voteFor",
    WANT_SUSCRIBE: 'wantSuscribe'
}