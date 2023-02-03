import React from 'react';

import Variables from './Variables';
import Reset from './Reset';
import Fonts from './Fonts';

const GlobalStyles = (): React.ReactElement => (
  <>
    <Reset />
    <Fonts />
    <Variables />
  </>
);

export default GlobalStyles;
