import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{
    --lightGray: #F3F5F7;
    --gray: #6C7275;
    --black: #141718;
    --blue: #377DFF;
    --darkGray:#343839
}


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    font-size: 62.5%;
}

body{
    font-family: "Poppins", sans-serif;
}

ul{
    list-style-type: none;
    text-decoration: none;
}

a{
    text-decoration: none;
}

button{
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
}

`;

export default GlobalStyles;
