export const noteList: NoteType[] = [
  {
    key: 'KeyA',
    note: 'C4',
    type: 'tone',
  },
  {
    key: 'KeyW',
    note: 'C#4',
    type: 'semitone',
  },
  {
    key: 'KeyS',
    note: 'D4',
    type: 'tone',
  },
  {
    key: 'KeyE',
    note: 'D#4',
    type: 'semitone',
  },
  {
    key: 'KeyD',
    note: 'E4',
    type: 'tone',
  },
  {
    key: 'KeyF',
    note: 'F4',
    type: 'tone',
  },
  {
    key: 'KeyT',
    note: 'F#4',
    type: 'semitone',
  },
  {
    key: 'KeyG',
    note: 'G4',
    type: 'tone',
  },
  {
    key: 'KeyY',
    note: 'G#4',
    type: 'semitone',
  },
  {
    key: 'KeyH',
    note: 'A4',
    type: 'tone',
  },
  {
    key: 'KeyU',
    note: 'A#4',
    type: 'semitone',
  },
  {
    key: 'KeyJ',
    note: 'B4',
    type: 'tone',
  },
  {
    key: 'KeyK',
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
