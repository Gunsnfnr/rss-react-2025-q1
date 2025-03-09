import React, { useContext, useEffect, useState } from 'react';
import './Searcher.css';
import { ErrorButton } from '../ErrorButton/ErrorButton';
import { ThemeContext } from '../../context/themeContext';

interface SearcherProps {
  searchTermSend: (userInput: string) => void;
}

const Searcher = ({ searchTermSend }: SearcherProps) => {
  const [userInput, setUserInput] = useState('');
  const { theme, changeTheme } = useContext(ThemeContext);

  useEffect(() => {
    const storedSearchTerm: string | null = localStorage.getItem('gunsnfnr.swQuery');
    if (storedSearchTerm) {
      setUserInput(storedSearchTerm);
    }
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const handleClick: () => void = () => {
    setUserInput(userInput.trim());
    searchTermSend(userInput);
  };

  return (
    <div className="search" data-theme={theme}>
      <input className="input-field" type="text" value={userInput} onChange={handleChange} />
      <button
        type="button"
        onClick={() => {
          handleClick();
        }}
      >
        Search
      </button>
      <button type="button" onClick={changeTheme} title="Click to change theme">
        Theme: {theme}
      </button>
      <ErrorButton />
    </div>
  );
};

export { Searcher };
