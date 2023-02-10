import React from 'react';
import { BasicNote, BasicSemiNote } from './index.styles';

interface NotePress extends NoteType {
  isPressed?: boolean;
}

interface NoteProps {
  note: NotePress;
  playNote: (note: string) => void;
  stopPlay: () => void;
}

const Note = ({ note, playNote, stopPlay }: NoteProps): JSX.Element => {
  const onMouseDown = (): void => playNote(note.name);

  const onMouseUp = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    e.stopPropagation();
    stopPlay();
  };

  const NoteComponent = note.type === 'tone' ? BasicNote : BasicSemiNote;

  return (
    <NoteComponent
      onMouseLeave={onMouseUp}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      isPressed={note.isPressed}
      type="button"
      title={note.name}
    />
  );
};

export default Note;
