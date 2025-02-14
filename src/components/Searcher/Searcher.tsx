import React, { useEffect, useState } from 'react';
import './Searcher.css';
import { ErrorButton } from '../ErrorButton/ErrorButton';

interface SearcherProps {
  searchTermSend: (userInput: string) => void;
}

const Searcher = ({ searchTermSend }: SearcherProps) => {
  const [userInput, setUserInput] = useState('');

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
    <div className="search">
      <input className="input-field" type="text" value={userInput} onChange={handleChange} />
      <button
        type="button"
        onClick={() => {
          handleClick();
        }}
      >
        Search
      </button>
      <ErrorButton />
    </div>
  );
};

export { Searcher };
