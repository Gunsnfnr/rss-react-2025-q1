import React, { useContext, useEffect, useState } from 'react';
import style from './Searcher.module.css';
import { ErrorButton } from '../ErrorButton/ErrorButton';
import { ThemeContext } from '../../context/themeContext';
import { useSearchParams } from 'next/navigation';

interface SearcherProps {
  searchTermSend: (userInput: string) => void;
}

const Searcher = ({ searchTermSend }: SearcherProps) => {
  const [userInput, setUserInput] = useState('');
  const { theme, changeTheme } = useContext(ThemeContext);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const searchTermFromUrl = searchParams?.get('search') ?? '';
    const storedSearchTerm: string | null = localStorage.getItem('gunsnfnr.swQuery');

    if (searchTermFromUrl !== undefined) {
      setUserInput(searchTermFromUrl);
    } else if (storedSearchTerm) {
      setUserInput(storedSearchTerm);
    }
  }, [searchParams]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const handleClick: () => void = () => {
    searchTermSend(userInput.trim());
    setUserInput(userInput.trim());
  };

  return (
    <div className={style.search} data-theme={theme}>
      <input className={style.input_field} type="text" value={userInput} onChange={handleChange} />
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
