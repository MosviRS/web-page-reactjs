import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,::after,::before{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    :root{
        --border: 1px dotted #585858;
        --back: background: -webkit-linear-gradient(
            to right,
            #4a00e0,
            #8e2de2
        ); 
        --color: black;
        --color-button: white;
        --background-table: white;
        --color-price: #585858;
        --box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.75);
    }
    html{  
        font-family: 'Ruda', sans-serif;
    }
    body{
        font-family: 'Ruda', sans-serif;
        font-size: 62.5%;
    }
    ul,li{
        font-size: 1.2em;
        list-style: none;
    }
    h3{
        font-size: 3em;
        text-align: center;
        margin-bottom: 2rem;
    }
    h4 {
      font-size: 1.7em;
      margin-bottom: 0.8rem;
    }
    a{
        font-size: 1.5rem;
        text-decoration: none;
        color: white;
    }
    p{
        font-size: 1.2rem;
    }
`;
export default GlobalStyles;
