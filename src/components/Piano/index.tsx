import React, { useCallback, useEffect, useRef } from 'react';

import * as Tone from 'tone';
import BasicPiano from './index.styles';
import { keysList } from '../../constants';
import Note from '../Note';

interface PianoProps {
  notes: NoteType[];
}

const Piano = ({ notes }: PianoProps): JSX.Element => {
  const synth = useRef<Tone.Synth | null>(null);

  const setupSynth = (): void => {
    synth.current = new Tone.Synth().toDestination();
  };

  const playNote = useCallback((note: string): void => {
    if (!synth.current) setupSynth();
    synth.current?.triggerAttack(note, '8n');
  }, []);

  const onKeyPress = useCallback(
    (e: KeyboardEvent): void => {
      const note = keysList[e.key];

      if (note?.note) {
        playNote(note.note);
      }
    },
    [playNote],
  );

  const stopPlays = useCallback((): void => {
    synth.current?.triggerRelease(Tone.now());
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', onKeyPress);
    window.addEventListener('keyup', stopPlays);

    return () => {
      window.removeEventListener('keydown', onKeyPress);
      window.removeEventListener('keyup', stopPlays);
    };
  }, [onKeyPress, stopPlays]);

  return (
    <BasicPiano>
      {notes.map(note => (
        <Note
          stopPlay={stopPlays}
          key={note.key}
          note={note}
          playNote={playNote}
        />
      ))}
    </BasicPiano>
  );
};

export default Piano;
