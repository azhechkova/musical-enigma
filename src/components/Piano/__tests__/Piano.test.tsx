import React from 'react';
import { render } from '@testing-library/react';

import Piano from '..';
import { noteList } from '../../../constants';

describe('Piano', () => {
  it('renders properly', () => {
    const { container: piano } = render(<Piano notes={noteList} />);

    expect(piano).toMatchSnapshot();
  });
});
