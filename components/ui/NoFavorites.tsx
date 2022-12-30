import React, { FC } from 'react'
import Image from "next/image";
import { Container, Text } from "@nextui-org/react";

export const NoFavorites: FC = () => {
  return (
    <Container css={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 100px)',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
      }}>
        <Text h1>No hay Favoritos</Text>
        <Image 
          src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/80.svg"}
          alt="No hay Favoritos"
          width={250}
          height={250}
        />
    </Container>
  )
};