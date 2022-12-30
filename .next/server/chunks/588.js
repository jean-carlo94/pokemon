"use strict";
exports.id = 588;
exports.ids = [588];
exports.modules = {

/***/ 1534:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* reexport safe */ _pokeApi__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _pokeApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7376);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pokeApi__WEBPACK_IMPORTED_MODULE_0__]);
_pokeApi__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7376:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const pokeApi = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: "https://pokeapi.co/api/v2/"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pokeApi);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* reexport */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/ui/index.ts + 2 modules
var ui = __webpack_require__(599);
;// CONCATENATED MODULE: ./components/layouts/Layout.tsx




const origin =  true ? "" : 0;
const Layout = ({ children , title  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: title ?? "Pokemon App"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "author",
                        content: "Jean Carlo Urrego"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: `Informacion sobre el prkemon ${title}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "keywords",
                        content: `${title}, pokemon, pokedesx`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:title",
                        content: `Informacion sobre el prkemon ${title}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:description",
                        content: `Pagina del pokemon ${title}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: `${origin}/img/banner.png`
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ui/* Navbar */.w, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                style: {
                    padding: "0px 20px"
                },
                children: children
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/layouts/index.ts



/***/ }),

/***/ 599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "w": () => (/* reexport */ Navbar),
  "_": () => (/* reexport */ NoFavorites)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "@nextui-org/react"
var react_ = __webpack_require__(6735);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/ui/Navbar.tsx





const Navbar = ()=>{
    const { theme  } = (0,react_.useTheme)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {
            display: "flex",
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "start",
            padding: "0x 20px",
            backgroundColor: theme?.colors.gray100.value
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                passHref: true,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
                            alt: "icono de la app",
                            width: 70,
                            height: 70
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                            color: "white",
                            h2: true,
                            children: "P"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                            color: "white",
                            h3: true,
                            children: "okemon"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Spacer, {
                css: {
                    flex: 1
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/favorites",
                passHref: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    style: {
                        marginRight: "40px"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        color: "white",
                        h5: true,
                        children: "favortos"
                    })
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/ui/NoFavorites.tsx




const NoFavorites = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Container, {
        css: {
            display: "flex",
            flexDirection: "column",
            height: "calc(100vh - 100px)",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                h1: true,
                children: "No hay Favoritos"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/80.svg",
                alt: "No hay Favoritos",
                width: 250,
                height: 250
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/ui/index.ts




/***/ })

};
;