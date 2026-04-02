import normalize from "styled-normalize";
import { createGlobalStyle } from "styled-components";
import { Theme } from "../models/theme";


export const GlobalStyle = createGlobalStyle`
${normalize}
* {
  box-sizing: border-box;
}

body {
transition: background-color .2s;
  background-color: ${({ theme }) => theme.colors.backgroudSecondary};
  padding: 50px 0 0 0;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 1.429;
  color: black;
}

.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

`