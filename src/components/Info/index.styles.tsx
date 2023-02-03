import styled from 'styled-components';

export const BasicDropdownWrap = styled.div`
  position: absolute;
  top: 50px;
  left: 50px;
`;

export const BasicDropdownTrigger = styled.button`
  padding: 0;
  background: transparent;
  cursor: pointer;
  color: var(--black-hover);
  & svg {
    height: 20px;
    width: 20px;
  }
`;

export const BasicDropdown = styled.div`
  position: absolute;
  z-index: 20;
  width: 300px;
  border: 2px solid var(--yellow-dark);
  padding: 15px;
  border-radius: 4px;
  line-height: 21px;
  background: var(--yellow-light);
`;

export const BasicInfoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  border: 1px solid var(--yellow);
  padding: 5px;
  margin: 10px 0;
`;
