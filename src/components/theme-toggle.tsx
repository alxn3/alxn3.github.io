import { useTheme } from 'next-themes';
import { ReactElement, useEffect, useState } from 'react';
import { FaMoon, FaSun, FaRegMoon, FaRegSun } from 'react-icons/fa';

const ThemeToggle = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [hover, setHover] = useState(false);
  const [icon, setIcon] = useState<ReactElement>();

  useEffect(() => {
    const MEDIA = '(prefers-color-scheme: dark)';
    const setSystem = () => setTheme('system');
    const media = window.matchMedia(MEDIA);
    media.addEventListener('change', setSystem);
    return () => media.removeEventListener('change', setSystem);
  }, []);

  const getIsDark = () =>
    theme === 'dark' || (theme === 'system' && resolvedTheme === 'dark');

  useEffect(() => {
    setIcon(
      getIsDark() ? (
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
      onClick={() => setTheme(getIsDark() ? 'light' : 'dark')}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="text-xl"
    >
      {icon}
    </button>
  );
};

export default ThemeToggle;
