export default {
    ADD_IMPACT: 'addImpact',
    ADD_FACET: 'addFacet',
    ADD_BRANCH: 'addBranch',
    ADD_ROOT: 'addRoot',
    ADD_TO_BASKET: 'addToBasket',
    ADD_TRANSPORT: 'addTransport',
    ALIGN_FRAGMENT: 'alignFragment',
    APPLY_COEF_TO_TREE: 'applyCoefToTree',
    APPLY_QUANTITY_COEF_ALL: 'applyQtCoefAll',
    APPLY_SELECTION: 'applySelection',
    ADD_CALLBACK: 'addCallback',
    POP_CALLBACK: 'PopCallback',
    CHECK_AUTH: "checkAuth",
    CHECK_ADMIN: "checkAdmin",
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
    DELETE_FACET: 'deleteFacet',
    DELETE_IMPACT: 'deleteImpact',
    DELETE_IMPACT_TANK: 'deleteImpactTank',
    DELETE_BRANCH: 'deleteBranch',
    DELETE_INFO: 'deleteInfo',
    UPDATE_BRANCH: 'updateBranch',
    DARK_FROM_STORAGE: 'darkFromStorage',
    DELETE_TREE: 'deleteTree',
    DELETE_OPENED_TREE: 'deleteOpenedTree',
    DELETE_ROOT: 'deleteRoot',
    DELETE_MESSAGE: 'deleteMessage',
    DELETE_REPLY: 'deleteReply',
    UPDATE_ROOT: 'updateRoot',
    EXCEPTION: 'exception',
    SWITCH_LEFT_MENU: 'switchLeftMenu',
    GET_INFO: 'getIngo',
    GET_FILM: 'getFilm',
    GO_EDIT_INFO: "goEditInfo",
    GO_IMPACT_ENTRY: 'goImpactEntry',
    GO_CHAT_BUG: 'goChatBug',
    GO_COMPARE: 'goCompare',
    GO_CREATE_TREE: "goCreateTree",
    GO_CREATE_INFO: 'goCreateInfo',
    GO_EQUIV: "goEquiv",
    GO_LOGIN: "goLogin",
    GO_QUI_DEUX_FOIS_PLUS: "goQui2",
    GO_HOME: 'goHome',
    GO_TREE: 'goTree',
    GO_ANY: 'goAny',
    GO_SELECTION: 'goSelection',
    GO_ROOT: 'goRoot',
    GO_BASKET: 'goBasket',
    GO_SEARCH: 'goSearch',
    GO_TO: 'goTo',
    IMPORT_TRUNK_ADEME: 'importTrunkAdeme',
    IMPORT_CATEGORIE_ADEME: 'importCategorieAdeme',
    IMPORT_IMPACT_ENTRY_ADEME: 'importImpactEntryAdeme',
    IMPORT_IMPACT_ADEME: 'importImpactAdeme',
    INIT_X_REQUEST_ID: 'initCorrelationId',
    load: fragment => `load${fragment[0].toUpperCase() + fragment.slice(1)}`,
    LOAD_CATEGORIES: 'loadCategories',
    LOAD_FACET: 'loadFacet',
    LOAD_IMPACTS: 'loadImpact',
    LOAD_IMPACTS_TANK: 'loadImpactsTank',
    LOAD_DAMAGES: 'loadDamages',
    LOAD_DAMAGES_TANK: 'loadDamagesTank',
    LOAD_BRANCHES: 'loadBranches',
    LOAD_GAME: 'loadGame',
    SEARCH_GAMES: 'loadGames',
    SAVE_GAME: 'saveGame',
    SAVE_SCORE: 'saveScore',
    LOAD_GRANDEUR: 'loadGrandeurs',
    LOAD_LEFT_ATTRIBUTE: 'loadLeftAttribute',
    LOAD_MESSAGES: 'loadMesages',
    LOAD_OPEN_TREE: 'loadOpenTree',
    LOAD_TRUNK: 'loadTrunk',
    LOAD_ROOTS: 'loadRoots',
    LOAD_TANK: 'loadTank',
    LOAD_USER: 'loadUser',
    LOAD_BASKET: 'loadBasket',
    LOAD_SELECTIONS: 'loadSelections',
    LOAD_SELECTION: 'loadSelection',
    LOAD_SELECTION_TREE: 'loadSelectionTree',
    LOGIN: 'login',
    LOGOUT: 'logout',
    MOUNT_APP: 'mountApp',
    LOAD_TREE: 'loadTree',
    LOAD_TREES: 'loadTrees',
    REFRESH_MY_MESSAGES: 'refreshMyMessages',
    REFRESH_ROOTS: 'refreshRoots',
    REFRESH_TREE: 'refreshTree',
    REMOVE_FROM_BASKET: 'removeFromBasket',
    RESPOND_MESSAGE: 'respondMessage',
    PUT_TRUNK_QUANTITY: "putTrunkQuantity",
    SAVE_INFO: "saveInfo",
    SAVE_EQ: "saveEq",
    SAVE_GROUP: "saveGr",
    SAVE_ALT: "saveAlt",
    SAVE_COMP: "saveComp",
    SAVE_BASKET: 'saveBasket',
    SAVE_APPLY_SELECTION: 'saveApplySelection',
    UPDATE_TRUNK: "updateTrunk",
    SEARCH_ALL: 'searchAll',
    SEARCH_TREE: 'searchTree',
    SEARCH_INFO: 'searchInfo',
    SEARCH_FACET_ENTRY: 'searchFacetEntry',
    SEARCH_IMPACT_ENTRY: 'searchImpactEntry',
    SEARCH_EQUIV: 'searchEquiv',
    SEARCH_USERS: 'searchUsers',
    SELECT_CONSULT: 'selectConsult',
    SEND_MESSAGE: 'sendMessage',
    SHOW_DIALOG: 'showDialog',
    SHOW_MESSAGES: 'showMessages',
    SNACKBAR: 'snackbar',
    SNACKERROR: 'snackbarError',
    START_CAMERA_MOVE: 'startCameraMove',
    SWIPE_LEFT: 'SWIPE_LEFT',
    SWIPE_RIGHT: 'SWIPE_RIGHT',
    SWITCH_COLORS: 'switchColors',
    TOGGLE_SELECT: 'toggleSelect',
    RANDOM_TREE_FROM_FRAGMENT: 'randomTreeFromFragment',
    UNSELECT: 'unselect',
    UPDATE_MESSAGE: 'updateMessage',
    UPDATE_TREE: 'loadTreeFragment',
    GET_FRAGMENT: 'getFragment',
    UPDATE_TREES: 'updateTrees',
    UPDATE_REPLY: 'updateReply',
    UPDATE_INFO: 'updateInfo',
    UPDATE_USER: "updateUser",
    USER_FROM_STORAGE: 'restoreUserFromStorage',
    USER_TO_STORAGE: 'userToStorage',
    VOTE_FOR: "voteFor",
    WANT_SUSCRIBE: 'wantSuscribe',
    NAV_PREVIOUS: 'navPrevious'
}