export const noteList: NoteType[] = [
  {
    key: 'KeyA',
    keyName: 'A',
    name: 'C4',
    type: 'tone',
  },
  {
    key: 'KeyW',
    keyName: 'W ',
    name: 'C#4',
    type: 'semitone',
  },
  {
    key: 'KeyS',
    keyName: 'S',
    name: 'D4',
    type: 'tone',
  },
  {
    key: 'KeyE',
    keyName: 'E',
    name: 'D#4',
    type: 'semitone',
  },
  {
    key: 'KeyD',
    keyName: 'D',
    name: 'E4',
    type: 'tone',
  },
  {
    key: 'KeyF',
    keyName: 'F',
    name: 'F4',
    type: 'tone',
  },
  {
    key: 'KeyT',
    keyName: 'T',
    name: 'F#4',
    type: 'semitone',
  },
  {
    key: 'KeyG',
    keyName: 'G',
    name: 'G4',
    type: 'tone',
  },
  {
    key: 'KeyY',
    keyName: 'Y',
    name: 'G#4',
    type: 'semitone',
  },
  {
    key: 'KeyH',
    keyName: 'H',
    name: 'A4',
    type: 'tone',
  },
  {
    key: 'KeyU',
    keyName: 'U',
    name: 'A#4',
    type: 'semitone',
  },
  {
    key: 'KeyJ',
    keyName: 'J',
    name: 'B4',
    type: 'tone',
  },
  {
    key: 'KeyK',
    keyName: 'K',
    name: 'C5',
    type: 'tone',
  },
  {
    key: 'KeyO',
    keyName: 'O',
    name: 'C#5',
    type: 'semitone',
  },
  {
    key: 'KeyL',
    keyName: 'L',
    name: 'D5',
    type: 'tone',
  },
  {
    key: 'KeyP',
    keyName: 'P',
    name: 'D#5',
    type: 'semitone',
  },
  {
    keyName: 'Semicolon',
    key: 'Semicolon',
    name: 'E5',
    type: 'tone',
  },
  { key: 'Quote', name: 'F5', type: 'tone' },
  {
    keyName: 'Bracket',
    key: 'BracketRight',
    name: 'F#5',
    type: 'semitone',
  },
  {
    keyName: 'Backslash',
    key: 'Backslash',
    name: 'G5',
    type: 'tone',
  },
];

const getKeysList = (notes: NoteType[]): KeysType =>
  notes.reduce<KeysType>((prev, curr) => {
    prev[curr.key] = curr;

    return prev;
  }, {});

export const keysList = getKeysList(noteList) as KeysType;
