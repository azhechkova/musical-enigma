import React from 'react';

import { fireEvent, render } from '@testing-library/react';
import Note from '..';

const whiteNote = { key: 'KeyA', name: 'C4', type: 'tone' } as NoteType;
const blackNote = { key: 'KeyA', name: 'C4', type: 'tone' } as NoteType;
const noteProps = {
  playNote: jest.fn(),
  stopPlay: jest.fn(),
};

describe('Note', () => {
  it('render white button properly', () => {
    const { container: note } = render(
      <Note note={whiteNote} {...noteProps} />,
    );

    expect(note).toMatchSnapshot();
  });
  it('renders black button properly', () => {
    const { container: note } = render(
      <Note note={blackNote} {...noteProps} />,
    );

    expect(note).toMatchSnapshot();
  });
  it('has button with title', async () => {
    const container = render(<Note note={whiteNote} {...noteProps} />);
    const button = await container.findByTitle(whiteNote.name);

    expect(button).toBeInTheDocument();
  });
  it('calls playNote function', async () => {
    const container = render(<Note note={whiteNote} {...noteProps} />);
    const button = await container.findByTitle(whiteNote.name);

    expect(button).toBeInTheDocument();
    fireEvent.mouseDown(button);
    expect(noteProps.playNote).toHaveBeenCalledTimes(1);
  });
  it('calls stopPlay function', async () => {
    const container = render(<Note note={whiteNote} {...noteProps} />);
    const button = await container.findByTitle(whiteNote.name);

    expect(button).toBeInTheDocument();
    fireEvent.mouseDown(button);
    fireEvent.mouseUp(button);

    expect(noteProps.stopPlay).toHaveBeenCalledTimes(1);
  });
});
