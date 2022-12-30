import React, { FC } from 'react';
import { Card, Grid, Row, Text } from "@nextui-org/react"

import { SmallPokemon } from '../../interfaces'
import Router from 'next/router';

interface Props {
    pokemon: SmallPokemon
}

export const PokemonCard: FC<Props> = ({pokemon}) => {
    const { id, name, img} = pokemon;

    const handkeClick = () => {
        Router.push(`/name/${pokemon.name}`)
    }
  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
      <Card isHoverable isPressable onClick={handkeClick}>
        <Card.Body>
          <Card.Image src={img} width='100%' height={140}/>
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{name}</Text>
            <Text>#{id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  )
}