import React from 'react';
import { Piano } from './components';
import { noteList } from './constants';

const App = (): JSX.Element => {
  return <Piano notes={noteList} />;
};

export default App;
