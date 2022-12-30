import React, { FC } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui';

interface Props {
  title?:string
  children?: React.ReactNode;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<Props> = ({children, title}) => {

  return (
    <>
        <Head>
            <title>{title ?? 'Pokemon App'}</title>
            <meta name='author' content='Jean Carlo Urrego' />
            <meta name='description' content={`Informacion sobre el prkemon ${ title }`} />
            <meta name='keywords' content={`${ title }, pokemon, pokedesx`} />

            <meta property="og:title" content={`Informacion sobre el prkemon ${ title }`} />
            <meta property="og:description" content={`Pagina del pokemon ${ title }`} />
            <meta property="og:image" content={`${origin}/img/banner.png`} />
        </Head>

        <Navbar/>
        
        <main style={{
          padding:'0px 20px',
        }}>
            { children }
        </main>
    </>
  )
}