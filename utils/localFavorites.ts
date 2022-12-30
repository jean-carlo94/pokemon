const searchFavorites = (): number[] =>{
    const favorites : number[] =  typeof window === 'undefined' ? [] : JSON.parse( localStorage.getItem('favorites') || '[]' );
    return favorites;
}

const toggleFavorites = ( id: number): void => {
    let favorites : number[] = searchFavorites();

    if( favorites.includes(id)){
        favorites = favorites.filter(pokeId => pokeId !== id);
    }else{
        favorites.push( id );
    }

    localStorage.setItem('favorites', JSON.stringify( favorites ));

  };

const existInFavorites = ( id:number ): boolean => {
  const favorites : number[] = searchFavorites();
  return favorites.includes( id );
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  toggleFavorites,
  existInFavorites,
  searchFavorites,
}