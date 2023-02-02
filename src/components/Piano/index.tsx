import React from 'react';
import BasicPiano from './index.styles';

import { NoteType } from '../../constants';
import Note from '../Note';

interface PianoProps {
  notes: NoteType[];
}

const Piano = ({ notes }: PianoProps): JSX.Element => {
  return (
    <BasicPiano>
      {notes.map(note => (
        <Note key={note.key} note={note} />
      ))}
    </BasicPiano>
  );
};

export default Piano;
