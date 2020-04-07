import React, { useState, ChangeEvent, useRef } from 'react';
import { debounce } from '~/utils/debounce';

import * as S from './index.style';

export const Search = () => {
  const inputEl = useRef<HTMLInputElement>(null);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputs = event.target.value;
    setIsTyping(true);
    setUserInput(inputs);
    debounceOnChange();
  };
  const func = () => {
    setIsTyping(false);
    if (inputEl.current !== null) {
      const userinputs = inputEl.current;
      console.log('/debounced', userinputs.value);
    }
  };
  const debounceOnChange = debounce(func, 1000, isTyping);

  return (
    <div>
      <label htmlFor="headerSearch">
        <input
          ref={inputEl}
          id="headerSearch"
          type="text"
          value={userInput}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

// if (isOnline === null) {
//   return 'Loading...';
// }
// return isOnline ? 'Online' : 'Offline';
