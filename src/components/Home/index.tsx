import React from 'react';
import BasicWrap from './index.styles';
import { noteList } from '../../constants';

import Piano from '../Piano';
import Info from '../Info';

const Home = (): JSX.Element => {
  return (
    <BasicWrap>
      <Info />
      <Piano notes={noteList} />
    </BasicWrap>
  );
};

export default Home;
