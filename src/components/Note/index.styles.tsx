import styled from 'styled-components';

export const BasicNote = styled.button`
  display: block;
  padding: 0;
  background-color: white;
  border-color: white;
  cursor: pointer;
  height: 200px;
  width: 50px;
`;

export const BasicSemiNote = styled(BasicNote)`
  background-color: black;
  color: white;
  width: 2em;
  margin: 0 -1em;
  z-index: 10;
  position: relative;
  height: 100px;
`;
