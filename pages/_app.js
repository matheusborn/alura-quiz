import { createGlobalStyle, ThemeProvider } from 'styled-components'
import db from '../db.json';

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
      <head>
        <meta property="og:title" content="Home"/>
        <meta property="og:description" content="Welcome to my blog!"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://phiilu.com/"/>
        <meta property="og:image" content="https://phiilu.com/images/og/977261ad2dded809bf3f4bdcf453f416.png"/>
      </head>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}