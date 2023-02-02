import React from 'react';
import { BasicNote, BasicSemiNote } from './index.styles';
import { NoteType } from '../../constants';

interface NoteProps {
  note: NoteType;
}

const Note = ({ note }: NoteProps): JSX.Element => {
  return note.type === 'tone' ? (
    <BasicNote>{note.note}</BasicNote>
  ) : (
    <BasicSemiNote>{note.note}</BasicSemiNote>
  );
};

export default Note;
