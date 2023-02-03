/// <reference types="react-scripts" />
declare module '*.woff';
declare module '*.woff2';

type NoteType = {
  key: string;
  keyName?: string;
  note: string;
  type: 'tone' | 'semitone';
};

type KeysType = Record<string, Partial<NoteType>>;
