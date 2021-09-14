import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root{
    --highlight: #e20e8d;
    --background: #E9EAEC;
    --white: #eeeeee;
    --container: 100rem;
    --small: 1.5rem;
    --medium: 3rem;
    --large: 5rem;
    --bgheader:#90ADC6;
  }

  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
    background: var(--background);
    color: #000;
  }

  body {
    font-family: 'Spartan','Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  ul{
    list-style: none;
  }
  p,
  a {
    font-size: 2rem;
    line-height: var(--medium);
  }
  a {
    color: var(--highlight);
  }
`

export default GlobalStyles
