import React, { useState, ChangeEvent, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { debounce } from '~/utils/debounce';

import * as UI from '~/assets/ui/Icons';
import * as S from './index.style';

export const SearchBar = () => {
  const inputEl = useRef<HTMLInputElement>(null);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  let history = useHistory();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsTyping(true);
    setUserInput(event.target.value);
    debounceOnChange();
  };
  const goSearch = () => {
    setIsTyping(false);

    if (inputEl.current !== null) {
      let keywords = inputEl.current.value;
      if (/^\s/.test(keywords)) {
        keywords = keywords.replace(/^\s/, '');
      }

      keywords.length > 0
        ? history.push(`/search?q=${keywords}`)
        : history.push(`/`);
    }
  };
  const debounceOnChange = debounce(goSearch, 600, isTyping);

  return (
    <S.Label htmlFor="headerSearch">
      <UI.Search width="2vw" height="100%" />
      <input
        ref={inputEl}
        id="headerSearch"
        type="search"
        value={userInput}
        onChange={onChange}
      />
    </S.Label>
  );
};
