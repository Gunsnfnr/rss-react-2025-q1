'use client';

import { createContext, PropsWithChildren } from 'react';
import useSetTheme from './useSetTheme';

const ThemeContext = createContext({ theme: 'dark', changeTheme: () => {} });

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const { theme, changeTheme } = useSetTheme();

  return <ThemeContext.Provider value={{ theme, changeTheme }}>{children}</ThemeContext.Provider>;
};

export { ThemeContext, ThemeProvider };
