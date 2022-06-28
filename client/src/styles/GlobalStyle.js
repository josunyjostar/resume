import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`

html {
    box-sizing: border-box;
}

*, *::before, *::after {
    box-sizing: border-box;
    font-family: 'Sunflower', sans-serif;
    font-style: normal;
    font-weight: 500;
    margin: 0;
    padding: 0;
}

body {
    box-sizing: border-box;
    padding: 0;
    margin: 0 auto;
    font-family:'Nanum Gothic', AppleSDGothicNeo-Regular,'Malgun Gothic','맑은 고딕',dotum,'돋움',sans-serif; 
    color: #222; font-size: 10px; line-height: 1.5;
}

dl, menu {
    list-style: none;
}

h1, h2, h3 {
    font-weight: bold;
}

a {color: #222; text-decoration: none;}
a:hover {color: #390;}

`;

export default GlobalStyle;
