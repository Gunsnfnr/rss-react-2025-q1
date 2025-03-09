import { useState } from 'react';

const useSetTheme = () => {
  const [theme, setTheme] = useState('dark');

  const changeTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  return { theme, changeTheme };
};

export default useSetTheme;
