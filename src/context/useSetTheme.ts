import { useEffect, useState } from 'react';

const useSetTheme = () => {
  const [theme, setTheme] = useState('dark');
  let storedTheme: string | null = 'dark';

  if (typeof window !== 'undefined') {
    storedTheme = localStorage.getItem('gunsnfnr.sw-theme');
  }

  const changeTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('gunsnfnr.sw-theme', newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    if (storedTheme) setTheme(storedTheme);
  }, [storedTheme]);

  return { theme, changeTheme };
};

export default useSetTheme;
