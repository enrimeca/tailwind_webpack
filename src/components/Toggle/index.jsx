import React from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';
import { ThemeContext } from '../../context';

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <section className="transition duration-500 ease-in-out rounded-full p-2 inline-block align-middle mb-1.5">
      {theme === 'dark' 
        ? (
          <HiSun
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-yellow-300 text-2xl cursor-pointer"
          />) 
        : (
            <HiMoon
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-gray-900 text-2xl cursor-pointer"
            />
          )}
    </section>
  );
};

export default Toggle;