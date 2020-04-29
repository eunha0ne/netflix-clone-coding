import React, { useState, useRef } from 'react';
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
    const inputNode = inputEl.current;
    if (inputNode) {
      let keyword = inputNode.value;
      const isFirstSpace = /^\s/.test(keyword);
      isFirstSpace && (keyword = trimFirstSpace(keyword));

      const isKeywordGiven = keyword.length > 0;
      const query = isKeywordGiven ? `/search?q=${keyword}` : `/`;

      history.push(query);
    }

    setIsUserTyping(false);
  };

  const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      goSearch();
    }
  };

  const clearUserInput = () => {
    const inputNode = inputEl.current;
    if (inputNode) {
      inputNode.value = '';
      setUserInput('');
      goSearch();

      inputNode.focus();
    }
  };

  const handleIsBlur = (event: React.FocusEvent<HTMLButtonElement>) => {
    const btn = event.target;
    const listenTabPress = () => {
      setIsBlur(true);
      btn.removeEventListener('blur', listenTabPress);
    };

    btn.addEventListener('blur', listenTabPress);
    setIsBlur(false);
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
      <S.Button onFocus={handleIsBlur} onClick={clearUserInput} isBlur={isBlur}>
        <UI.IconX width="2.5rem" height="2.5rem" />
      </S.Button>
    </S.Label>
  );
};
