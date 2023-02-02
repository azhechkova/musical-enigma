/// <reference types="react-scripts" />
type NoteType = {
  key: string;
  note: string;
  type: 'tone' | 'semitone';
};

type KeysType = Record<string, Partial<NoteType>>;
