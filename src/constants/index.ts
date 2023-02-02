export type NoteType = {
  key: string;
  note: string;
  type: 'tone' | 'semitone';
};

export const noteList: NoteType[] = [
  {
    key: 'a',
    note: 'C',
    type: 'tone',
  },
  {
    key: 'w',
    note: 'C#',
    type: 'semitone',
  },
  {
    key: 's',
    note: 'D',
    type: 'tone',
  },
  {
    key: 'e',
    note: 'D#',
    type: 'semitone',
  },
  {
    key: 'd',
    note: 'E',
    type: 'tone',
  },
  {
    key: 'f',
    note: 'F',
    type: 'tone',
  },
  {
    key: 't',
    note: 'F#',
    type: 'semitone',
  },
  {
    key: 'g',
    note: 'G',
    type: 'tone',
  },
  {
    key: 'y',
    note: 'G#',
    type: 'semitone',
  },
  {
    key: 'h',
    note: 'A',
    type: 'tone',
  },
  {
    key: 'u',
    note: 'A#',
    type: 'semitone',
  },
  {
    key: 'j',
    note: 'B',
    type: 'tone',
  },
];
