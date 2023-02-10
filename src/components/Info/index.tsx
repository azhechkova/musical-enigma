import React, { useRef, useState } from 'react';
import {
  BasicDropdown,
  BasicDropdownTrigger,
  BasicDropdownWrap,
  BasicInfoList,
} from './index.styles';
import { noteList } from '../../constants';
import { ReactComponent as InfoSvg } from '../../assets/images/info.svg';
import useClickOutside from '../../hooks/useClickOutside';

const Info = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useClickOutside(ref, () => setIsOpen(false));

  return (
    <BasicDropdownWrap ref={ref}>
      <BasicDropdownTrigger
        type="button"
        onClick={(): void => setIsOpen(!isOpen)}
      >
        <InfoSvg />
      </BasicDropdownTrigger>
      {isOpen && (
        <BasicDropdown>
          Press key to play music. Some instructions:
          <BasicInfoList>
            {noteList.map(note => (
              <li key={note.key}>
                Key {note.keyName}: {note.name}
              </li>
            ))}
          </BasicInfoList>
          Enjoy!
        </BasicDropdown>
      )}
    </BasicDropdownWrap>
  );
};

export default Info;
