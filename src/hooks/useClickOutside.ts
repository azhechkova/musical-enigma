import { useEffect } from 'react';

const useClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T>,
  callback: (event: Event) => void,
): void => {
  useEffect(() => {
    const listener = (event: Event): void => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      callback(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return (): void => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, callback]);
};

export default useClickOutside;
