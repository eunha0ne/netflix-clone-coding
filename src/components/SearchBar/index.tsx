import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { debounce } from '~/utils/debounce';
import { trimFirstSpace } from '~/utils/common';

import * as UI from '~/assets/ui/Icons';
import * as S from './index.style';

export const SearchBar = () => {
  const history = useHistory();

  const inputEl = useRef<HTMLInputElement>(null);
  const [isBlur, setIsBlur] = useState(true);
  const [userInput, setUserInput] = useState('');
  const [isUserTyping, setIsUserTyping] = useState(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsUserTyping(true);
    setUserInput(event.target.value);
    debounce(goSearch, 600, isUserTyping)();
  };

  const goSearch = () => {
    setIsUserTyping(false);

    const inputNode = inputEl.current;
    if (inputNode) {
      let keyword = inputNode.value;
      const isFirstSpace = /^\s/.test(keyword);
      isFirstSpace && (keyword = trimFirstSpace(keyword));

      const isKeywordGiven = keyword.length > 0;
      const query = isKeywordGiven ? `/search?q=${keyword}` : `/`;

      history.push(query);
    }
  };

  const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      goSearch();
    }
  };

  const stayOnFocus = () => {
    const inputNode = inputEl.current;
    if (inputNode) {
      setUserInput('');
      inputNode.focus();
    }
  };

  return (
    <S.Label htmlFor="headerSearch" isBlur={isBlur}>
      <UI.Search width="2.5rem" height="2.5rem" />
      <S.Input
        ref={inputEl}
        id="headerSearch"
        type="search"
        value={userInput}
        onChange={onChange}
        onKeyPress={onKeyPress}
        onFocus={() => setIsBlur(false)}
        onBlur={() => setIsBlur(true)}
        isBlur={isBlur}
      />
      <div onClick={stayOnFocus} className="clear-btn">
        <UI.IconX width="2.5rem" height="2.5rem" />
      </div>
    </S.Label>
  );
};
