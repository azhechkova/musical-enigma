export const noteList: NoteType[] = [
  {
    key: 'a',
    note: 'C4',
    type: 'tone',
  },
  {
    key: 'w',
    note: 'C#4',
    type: 'semitone',
  },
  {
    key: 's',
    note: 'D4',
    type: 'tone',
  },
  {
    key: 'e',
    note: 'D#4',
    type: 'semitone',
  },
  {
    key: 'd',
    note: 'E4',
    type: 'tone',
  },
  {
    key: 'f',
    note: 'F4',
    type: 'tone',
  },
  {
    key: 't',
    note: 'F#4',
    type: 'semitone',
  },
  {
    key: 'g',
    note: 'G4',
    type: 'tone',
  },
  {
    key: 'y',
    note: 'G#4',
    type: 'semitone',
  },
  {
    key: 'h',
    note: 'A4',
    type: 'tone',
  },
  {
    key: 'u',
    note: 'A#4',
    type: 'semitone',
  },
  {
    key: 'j',
    note: 'B4',
    type: 'tone',
  },
  {
    key: 'k',
    note: 'C5',
    type: 'tone',
  },
];

const getKeysList = (notes: NoteType[]): KeysType =>
  notes.reduce<KeysType>((prev, curr) => {
    prev[curr.key] = curr;

    return prev;
  }, {});

export const keysList = getKeysList(noteList) as KeysType;
