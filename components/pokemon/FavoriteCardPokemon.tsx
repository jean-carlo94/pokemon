import React, { FC } from 'react'
import { Card, Grid } from "@nextui-org/react";
import { useRouter } from 'next/router';

interface Props {
    pokemonId: number;
}

export const FavoriteCardPokemon : FC<Props> = ({pokemonId}) => {

    const router = useRouter();

    const handleClick = () => {
        router.push(`/pokemon/${pokemonId}`)
    }

  return (
    <Grid xs={6} sm={3} xl={1}>
      <Card isHoverable isPressable css={{padding: 10}} onClick={handleClick}>
        <Card.Image 
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
          width={'100%'}
          height={'140px'}
        />
      </Card>
    </Grid>
  )
}