import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export const useLocalStorage = (
  initialValue: string
): [string, Dispatch<SetStateAction<string>>] => {
  const [storedSearchTerm, setStoredSearchTerm] = useState<string>(() => {
    if (typeof window === 'undefined') return '';
    return localStorage.getItem('gunsnfnr.swQuery') ?? initialValue;
  });

  useEffect(() => {
    localStorage.setItem('gunsnfnr.swQuery', storedSearchTerm);
  }, [storedSearchTerm]);

  return [storedSearchTerm, setStoredSearchTerm];
};
