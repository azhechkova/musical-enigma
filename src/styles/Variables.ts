import { createGlobalStyle } from 'styled-components';

const Variables = createGlobalStyle`
    :root {
        --white: #E8EDDF;
        --white-hover: #CFDBD5;
        --black: #242423;
        --black-hover: #333533;
        --yellow: #F5CB5C;
    }
    body,
    * {
        color: var(--dark-blue);
    }
`;

export default Variables;
