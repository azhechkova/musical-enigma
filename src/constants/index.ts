export const noteList: NoteType[] = [
  {
    key: 'KeyA',
    keyName: 'A',
    note: 'C4',
    type: 'tone',
  },
  {
    key: 'KeyW',
    keyName: 'W ',
    note: 'C#4',
    type: 'semitone',
  },
  {
    key: 'KeyS',
    keyName: 'S',
    note: 'D4',
    type: 'tone',
  },
  {
    key: 'KeyE',
    keyName: 'E',
    note: 'D#4',
    type: 'semitone',
  },
  {
    key: 'KeyD',
    keyName: 'D',
    note: 'E4',
    type: 'tone',
  },
  {
    key: 'KeyF',
    keyName: 'F',
    note: 'F4',
    type: 'tone',
  },
  {
    key: 'KeyT',
    keyName: 'T',
    note: 'F#4',
    type: 'semitone',
  },
  {
    key: 'KeyG',
    keyName: 'G',
    note: 'G4',
    type: 'tone',
  },
  {
    key: 'KeyY',
    keyName: 'Y',
    note: 'G#4',
    type: 'semitone',
  },
  {
    key: 'KeyH',
    keyName: 'H',
    note: 'A4',
    type: 'tone',
  },
  {
    key: 'KeyU',
    keyName: 'U',
    note: 'A#4',
    type: 'semitone',
  },
  {
    key: 'KeyJ',
    keyName: 'J',
    note: 'B4',
    type: 'tone',
  },
  {
    key: 'KeyK',
    keyName: 'K',
    note: 'C5',
    type: 'tone',
  },
  {
    key: 'KeyO',
    keyName: 'O',
    note: 'C#5',
    type: 'semitone',
  },
  {
    key: 'KeyL',
    keyName: 'L',
    note: 'D5',
    type: 'tone',
  },
  {
    key: 'KeyP',
    keyName: 'P',
    note: 'D#5',
    type: 'semitone',
  },
  {
    keyName: 'Semicolon',
    key: 'Semicolon',
    note: 'E5',
    type: 'tone',
  },
  { key: 'Quote', note: 'F5', type: 'tone' },
  {
    keyName: 'Bracket',
    key: 'BracketRight',
    note: 'F#5',
    type: 'semitone',
  },
  {
    keyName: 'Backslash',
    key: 'Backslash',
    note: 'G5',
    type: 'tone',
  },
];

const getKeysList = (notes: NoteType[]): KeysType =>
  notes.reduce<KeysType>((prev, curr) => {
    prev[curr.key] = curr;

    return prev;
  }, {});

export const keysList = getKeysList(noteList) as KeysType;
