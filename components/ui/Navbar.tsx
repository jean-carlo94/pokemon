import React from 'react'
import NextLink from 'next/link';

import { Spacer, Text, useTheme, Link } from '@nextui-org/react'
import Image from 'next/image';

export const Navbar = () => {

    const { theme } = useTheme();

  return (
    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0x 20px',
        backgroundColor: theme?.colors.gray100.value
    }}>
        <NextLink href={'/'} passHref>
          <div style={{ display:'flex', alignItems:'center', justifyContent: 'space-between' }}>
            <Image 
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
              alt='icono de la app' 
              width={70} 
              height={70}
            />
            <Text color='white' h2>P</Text>
            <Text color='white' h3>okemon</Text>
          </div>
        </NextLink>

        <Spacer css={{flex:1}}/>

        <NextLink href={'/favorites'} passHref>
          <div style={{marginRight: '40px'}}>
            <Text color='white' h5>favortos</Text>
          </div>
        </NextLink>
        
    </div>
  )
}
