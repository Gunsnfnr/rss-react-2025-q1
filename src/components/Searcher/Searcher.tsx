import React, { useContext, useEffect, useState } from 'react';
import style from './Searcher.module.css';
import { ErrorButton } from '../ErrorButton/ErrorButton';
import { ThemeContext } from '../../context/themeContext';
import { useRouter } from 'next/router';

interface SearcherProps {
  searchTermSend: (userInput: string) => void;
}

const Searcher = ({ searchTermSend }: SearcherProps) => {
  const [userInput, setUserInput] = useState('');
  const { theme, changeTheme } = useContext(ThemeContext);
  const router = useRouter();

  useEffect(() => {
    const searchTermFromUrl = router.query.search as string;
    const storedSearchTerm: string | null = localStorage.getItem('gunsnfnr.swQuery');
    if (searchTermFromUrl !== undefined) {
      setUserInput(searchTermFromUrl);
    } else if (storedSearchTerm) {
      setUserInput(storedSearchTerm);
    }
  }, [router.query.search]);

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
