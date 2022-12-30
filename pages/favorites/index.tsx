import React, { useEffect, useState } from "react";

import { NextPage } from "next"
import { Layout } from "../../components/layouts"
import { NoFavorites } from "../../components/ui";
import { localFavorites } from "../../utils";
import { FavoritesPokemon } from "../../components/pokemon";

const Favorites: NextPage = () => {
  
  const [favoritePokemos, setFavoritePokemos] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemos(localFavorites.searchFavorites());
  }, [])
  

  return (
    <Layout title="Pokemons - Favoritos">
      { favoritePokemos.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritesPokemon pokemons={favoritePokemos}/>
      )
      }
    </Layout>
  )
};

export default Favorites;
