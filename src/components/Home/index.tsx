import React from 'react';
import BasicWrap from './index.styles';
import { noteList } from '../../constants';

import Piano from '../Piano';

const Home = (): JSX.Element => {
  return (
    <BasicWrap>
      <Piano notes={noteList} />
    </BasicWrap>
  );
};

export default Home;
