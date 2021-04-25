import React from 'react';

const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme');
    if (typeof storedPrefs === 'string') {
      return storedPrefs;
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
    if (userMedia.matches) {
      return 'dark';
    }
  }

  return 'light';
};

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ initialTheme, children }) => {
  const [theme, setTheme] = React.useState(getInitialTheme);

  const localSetTheme = (localTheme) => {
    const root = window.document.documentElement;
    const isDark = localTheme === 'dark';

    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(localTheme);

    localStorage.setItem('color-theme', localTheme);
  };

  if (initialTheme) {
      localSetTheme(initialTheme);
  }

  React.useEffect(() => {
    localSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};