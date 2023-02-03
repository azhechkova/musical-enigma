import React from 'react';

import Variables from './Variables';
import Reset from './Reset';
import Fonts from './Fonts';

const GlobalStyles = (): React.ReactElement => (
  <>
    <Reset />
    <Variables />
    <Fonts />
  </>
);

export default GlobalStyles;
