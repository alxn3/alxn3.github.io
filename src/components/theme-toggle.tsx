import { useTheme } from 'next-themes';
import { useState } from 'react';
import { FaMoon, FaSun, FaRegMoon, FaRegSun } from 'react-icons/fa';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [hover, setHover] = useState(false);

  const toggleHover = () => setHover(!hover);

  return (
    <div
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      className="text-xl"
    >
      {theme === 'dark' ? (
        hover ? (
          <FaRegSun />
        ) : (
          <FaMoon />
        )
      ) : hover ? (
        <FaRegMoon />
      ) : (
        <FaSun />
      )}
    </div>
  );
};

export default ThemeToggle;
