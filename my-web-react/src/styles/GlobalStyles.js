import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *,::after,::before{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font: 62.5%
    }
    html{
        font-size: 62.5;
        font-family: 'Ruda', sans-serif;
    }
    ul,li{
        list-style: none;
    }
    a{
        text-decoration: none;
    }
`;
export default GlobalStyles;