import styled from 'styled-components';

export const BasicNote = styled.button`
  display: block;
  padding: 0;
  background-color: white;
  border-color: white;
  cursor: pointer;
  height: 200px;
  width: 50px;
  box-shadow: -1px 0 0 white inset, 0 0 5px hsl(0, 0%, 80%) inset, 0 0 3px black;
  background: linear-gradient(to bottom, hsl(0, 0%, 93%) 0%, white 100%);
  color: black;

  &:first-child {
    border-radius: 4px 0 4px 4px;
  }
  &:last-child {
    border-radius: 0 4px 4px 4px;
  }
`;

export const BasicSemiNote = styled(BasicNote)`
  background-color: black;
  color: white;
  width: 2em;
  margin: 0 -1em;
  z-index: 10;
  position: relative;
  height: 100px;
  box-shadow: -1px -1px 2px white inset, 0 -5px 2px 3px black inset,
    0 2px 4px black;
  background: linear-gradient(45deg, hsl(0, 0%, 13%) 0%, hsl(0, 0%, 33%) 100%);
  color: white;
`;
