import { createGlobalStyle } from 'styled-components';

import GilroyRegularWoff from '../fonts/Gilroy-Regular.woff';
import GilroyRegularWoff2 from '../fonts/Gilroy-Regular.woff2';

const Fonts = createGlobalStyle`
  @font-face {
    font-family: 'Gilroy';
    src: local('Gilroy Regular'), local('Gilroy-Regular'),
      url(${GilroyRegularWoff}) format('woff2'),
      url(${GilroyRegularWoff2}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;

export default Fonts;
