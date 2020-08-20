import React, { createContext, useContext, useCallback, useState } from 'react';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';
import {
  ThemeProvider as ProviderStyledComponents,
  DefaultTheme,
} from 'styled-components';

interface ThemeContextData {
  theme: DefaultTheme;
  changeTheme(): void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<DefaultTheme>(() => {
    if (localStorage.getItem('@emailManager:theme')) {
      return JSON.parse(localStorage.getItem('@emailManager:theme') || '');
    }

    return light;
  });

  const changeTheme = useCallback(() => {
    if (theme.title === 'dark') {
      setTheme(light);
      localStorage.setItem('@emailManager:theme', JSON.stringify(light));
    } else {
      setTheme(dark);
      localStorage.setItem('@emailManager:theme', JSON.stringify(dark));
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <ProviderStyledComponents theme={theme}>
        {children}
      </ProviderStyledComponents>
    </ThemeContext.Provider>
  );
};

function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within an ThemeProvider');
  }

  return context;
}

export { ThemeProvider, useTheme };
