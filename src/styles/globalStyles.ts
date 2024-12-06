import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    outline:0;
    padding:0;
    margin:0;
    box-sizing: border-box
  }

  body{
    background: ${props => props.theme.colors.baseBackground};
    max-width: 100vw;
    max-height: 100vh;
    overflow: hidden;
  }
`