import React, { useCallback, useEffect, useRef, useState } from 'react';

import * as Tone from 'tone';
import BasicPiano from './index.styles';
import { keysList } from '../../constants';
import Note from '../Note';

interface PianoProps {
  notes: NoteType[];
}
type PressedKeyType = Record<string, boolean>;

const Piano = ({ notes }: PianoProps): JSX.Element => {
  const synth = useRef<Tone.Synth | null>(null);
  const [pressedKeys, setPressedKeys] = useState<PressedKeyType>({});

  const setupSynth = (): void => {
    synth.current = new Tone.Synth().toDestination();
  };

  useEffect(() => {
    const formatKeys = notes?.reduce<PressedKeyType>((prev, next) => {
      prev[next.key] = false;

      return prev;
    }, {});

    setPressedKeys(formatKeys);
  }, [notes]);

  const playNote = useCallback((note: string): void => {
    if (!synth.current) setupSynth();
    synth.current?.triggerAttack(note, '8n');
  }, []);

  const onKeyPress = useCallback(
    (e: KeyboardEvent): void => {
      const note = keysList[e.code];

      if (note?.name) {
        setPressedKeys({ ...pressedKeys, [e.code]: true });
        playNote(note.name);
      }
    },
    [playNote, pressedKeys],
  );

  const stopPlay = useCallback((): void => {
    synth.current?.triggerRelease(Tone.now());
  }, []);

  const onKeyUp = useCallback(
    (e: KeyboardEvent): void => {
      const note = keysList[e.code];

      if (note?.name) {
        setPressedKeys({ ...pressedKeys, [e.code]: false });

        stopPlay();
      }
    },
    [pressedKeys, stopPlay],
  );

  useEffect(() => {
    window.addEventListener('keydown', onKeyPress);
    window.addEventListener('keyup', onKeyUp);

    return () => {
      window.removeEventListener('keydown', onKeyPress);
      window.removeEventListener('keyup', onKeyUp);
    };
  }, [onKeyPress, onKeyUp]);

  return (
    <BasicPiano>
      {notes.map(note => (
        <Note
          stopPlay={stopPlay}
          key={note.key}
          note={{ ...note, isPressed: pressedKeys[note.key] }}
          playNote={playNote}
        />
      ))}
    </BasicPiano>
  );
};

export default Piano;
