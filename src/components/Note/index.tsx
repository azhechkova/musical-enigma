import React from 'react';
import { BasicNote, BasicSemiNote } from './index.styles';

interface NoteProps {
  note: NoteType;
  playNote: (note: string) => void;
  stopPlay: () => void;
}

const Note = ({ note, playNote, stopPlay }: NoteProps): JSX.Element => {
  const onMouseDown = (): void => playNote(note.note);

  const onMouseUp = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    e.stopPropagation();
    stopPlay();
  };

  return note.type === 'tone' ? (
    <BasicNote
      onMouseLeave={onMouseUp}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    />
  ) : (
    <BasicSemiNote
      onMouseLeave={onMouseUp}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    />
  );
};

export default Note;
