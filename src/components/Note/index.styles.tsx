import { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface BasicNoteProps extends HTMLAttributes<HTMLButtonElement> {
  isPressed?: boolean;
}

export const BasicNote = styled.button<BasicNoteProps>(({ isPressed }) => [
  `
  display: block;
  padding: 0;
  border-color: var(--white-hover);
  cursor: pointer;
  height: 200px;
  width: 50px;
  box-shadow: -1px 0 0 var(--white-hover) inset, 0 0 5px hsl(0, 0%, 80%) inset,
    0 0 3px var(--black);
  background: linear-gradient(to bottom, hsl(0, 0%, 93%) 0%, var(--white) 100%);

  &:first-child {
    border-radius: 4px 0 4px 4px;
  }
  &:last-child {
    border-radius: 0 4px 4px 4px;
  }
  &:active {
    border-top: 1px solid #777;
    border-left: 1px solid #999;
    border-bottom: 1px solid #999;
    box-shadow: 2px 0 3px rgba(0, 0, 0, 0.1) inset,
      -5px 5px 20px rgba(0, 0, 0, 0.2) inset, 0 0 3px rgba(0, 0, 0, 0.2);
    background: linear-gradient(to bottom, var(--white) 0%, #e9e9e9 100%);
  }
`,
  isPressed &&
    `border-top: 1px solid #777;
    border-left: 1px solid #999;
    border-bottom: 1px solid #999;
    box-shadow: 2px 0 3px rgba(0, 0, 0, 0.1) inset,
      -5px 5px 20px rgba(0, 0, 0, 0.2) inset, 0 0 3px rgba(0, 0, 0, 0.2);
    background: linear-gradient(to bottom, var(--white) 0%, #e9e9e9 100%);
`,
]);

export const BasicSemiNote = styled(BasicNote)(({ isPressed }) => [
  `
  width: 2em;
  margin: 0 -1em;
  z-index: 10;
  position: relative;
  height: 100px;
  box-shadow: -1px -1px 2px var(--black-hover) inset,
    0 -5px 2px 3px var(--black) inset, 0 2px 4px var(--black-hover);
  background: linear-gradient(45deg, hsl(0, 0%, 13%) 0%, hsl(0, 0%, 33%) 100%);

  &:active {
    box-shadow: -1px -1px 2px rgba(232, 237, 223, 0.2) inset,
      0 -2px 2px 3px rgba(36, 36, 35, 0.6) inset,
      0 1px 2px rgba(36, 36, 35, 0.5);
    background: linear-gradient(to right, #444 0%, #222 100%);
  }
`,
  isPressed &&
    `box-shadow: -1px -1px 2px rgba(232, 237, 223, 0.2) inset,
      0 -2px 2px 3px rgba(36, 36, 35, 0.6) inset,
      0 1px 2px rgba(36, 36, 35, 0.5);
    background: linear-gradient(to right, #444 0%, #222 100%);
`,
]);
