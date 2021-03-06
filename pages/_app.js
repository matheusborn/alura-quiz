import { createGlobalStyle, ThemeProvider } from 'styled-components'
import db from '../db.json';
import Head from 'next/head'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

const theme = db.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />

        <title>Imersão Alura - Quiz de Friends</title>
        <meta name="description" content="Imersão Alura - Quiz de Matheus Barros"/>

        <meta property="og:url" content="https://alura-quiz.matheusborn.vercel.app/"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Imersão Alura - Quiz de Friends"/>
        <meta property="og:description" content="Imersão Alura - Quiz de Matheus Barros"/>
        <meta property="og:image" content="https://i.pinimg.com/originals/af/e3/0e/afe30e391b64bfe4c6bc951f3eecb604.jpg"/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="alura-quiz.matheusborn.vercel.app"/>
        <meta property="twitter:url" content="https://alura-quiz.matheusborn.vercel.app/"/>
        <meta name="twitter:title" content="Imersão Alura - Quiz de Friends"/>
        <meta name="twitter:description" content="Imersão Alura - Quiz de Matheus Barros"/>
        <meta name="twitter:image" content="https://i.pinimg.com/originals/af/e3/0e/afe30e391b64bfe4c6bc951f3eecb604.jpg"/>
      </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}