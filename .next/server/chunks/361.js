"use strict";
exports.id = 361;
exports.ids = [361];
exports.modules = {

/***/ 8169:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ getPokemonInfo)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1534);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api__WEBPACK_IMPORTED_MODULE_0__]);
_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const getPokemonInfo = async (nameOrId)=>{
    try {
        const { data  } = await _api__WEBPACK_IMPORTED_MODULE_0__/* .pokeApi.get */ .T.get(`pokemon/${nameOrId}`);
        return {
            id: data.id,
            name: data.name,
            sprites: data.sprites
        };
    } catch (error) {
        return null;
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9361:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* reexport safe */ _localFavorites__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "w": () => (/* reexport safe */ _getPokemonInfo__WEBPACK_IMPORTED_MODULE_1__.w)
/* harmony export */ });
/* harmony import */ var _localFavorites__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9335);
/* harmony import */ var _getPokemonInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8169);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_getPokemonInfo__WEBPACK_IMPORTED_MODULE_1__]);
_getPokemonInfo__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9335:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const searchFavorites = ()=>{
    const favorites =  true ? [] : 0;
    return favorites;
};
const toggleFavorites = (id)=>{
    let favorites = searchFavorites();
    if (favorites.includes(id)) {
        favorites = favorites.filter((pokeId)=>pokeId !== id);
    } else {
        favorites.push(id);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
};
const existInFavorites = (id)=>{
    const favorites = searchFavorites();
    return favorites.includes(id);
};
// eslint-disable-next-line import/no-anonymous-default-export
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    toggleFavorites,
    existInFavorites,
    searchFavorites
});


/***/ })

};
;