import { useTheme } from 'next-themes';
import { ReactElement, useEffect, useState } from 'react';
import { FaMoon, FaSun, FaRegMoon, FaRegSun } from 'react-icons/fa';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [hover, setHover] = useState(false);
  const [icon, setIcon] = useState<ReactElement>();

  useEffect(() => {
    setIcon(
      theme === 'dark' ? (
        hover ? (
          <FaRegSun />
        ) : (
          <FaMoon />
        )
      ) : hover ? (
        <FaRegMoon />
      ) : (
        <FaSun />
      )
    );
  }, [hover, theme]);

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="text-xl"
    >
      {icon}
    </button>
  );
};

export default ThemeToggle;
