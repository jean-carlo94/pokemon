"use strict";
exports.id = 547;
exports.ids = [547];
exports.modules = {

/***/ 5547:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "I7": () => (/* reexport */ FavoriteCardPokemon),
  "fO": () => (/* reexport */ FavoritesPokemon),
  "cM": () => (/* reexport */ PokemonCard)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@nextui-org/react"
var react_ = __webpack_require__(6735);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ./components/pokemon/PokemonCard.tsx




const PokemonCard = ({ pokemon  })=>{
    const { id , name , img  } = pokemon;
    const handkeClick = ()=>{
        router_default().push(`/name/${pokemon.name}`);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Grid, {
        xs: 6,
        sm: 3,
        md: 2,
        xl: 1,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Card, {
            isHoverable: true,
            isPressable: true,
            onClick: handkeClick,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Card.Body, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Card.Image, {
                        src: img,
                        width: "100%",
                        height: 140
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Card.Footer, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Row, {
                        justify: "space-between",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                transform: "capitalize",
                                children: name
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                                children: [
                                    "#",
                                    id
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/pokemon/FavoritesPokemon.tsx




const FavoritesPokemon = ({ pokemons  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Grid.Container, {
        gap: 2,
        direction: "row",
        justify: "flex-start",
        children: pokemons.map((id)=>/*#__PURE__*/ jsx_runtime_.jsx(FavoriteCardPokemon, {
                pokemonId: id
            }, id))
    });
};

;// CONCATENATED MODULE: ./components/pokemon/FavoriteCardPokemon.tsx




const FavoriteCardPokemon = ({ pokemonId  })=>{
    const router = (0,router_.useRouter)();
    const handleClick = ()=>{
        router.push(`/pokemon/${pokemonId}`);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Grid, {
        xs: 6,
        sm: 3,
        xl: 1,
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Card, {
            isHoverable: true,
            isPressable: true,
            css: {
                padding: 10
            },
            onClick: handleClick,
            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Card.Image, {
                src: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`,
                width: "100%",
                height: "140px"
            })
        })
    });
};

;// CONCATENATED MODULE: ./components/pokemon/index.ts





/***/ })

};
;