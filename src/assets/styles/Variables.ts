import { createGlobalStyle } from 'styled-components';

const Variables = createGlobalStyle`
    :root {
        --default-font: 'Gilroy', sans-serif;
        --white: #E8EDDF;
        --white-hover: #CFDBD5;
        --black: #242423;
        --black-hover: #333533;
        --yellow: #F5CB5C;
        --yellow-light: #FAE7B2;
        --yellow-dark: #E6AD0F
    }
    body,
    * {
        font-family: var(--default-font);
    }
`;

export default Variables;
