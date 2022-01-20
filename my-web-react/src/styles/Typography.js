import {createGlobalStyle} from 'styled-components';
import RudaRegular from '../assets/fonts/Ruda-Regular.ttf';
const Typography = createGlobalStyle`
    @font-face {
        font-family: 'Ruda regular';
        src: url(${RudaRegular});
        font-style: normal
    }

`
export default Typography;