import Link from 'next/link';
import ThemeToggle from './theme-toggle';

const NavLinks: { name: string; link: string }[] = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Contact',
    link: '/contact',
  },
];

const Navbar = () => {
  return (
    <nav className="flex flex-col flex-wrap items-center justify-between p-3 sm:flex-row">
      <Link href="/">
        <a className="p-2">
          <span className="font-mono text-2xl font-bold tracking-wide text-black dark:text-white">
            Alex Lin
          </span>
        </a>
      </Link>
      <div className="flex flex-row items-center space-x-4 text-lg">
        {NavLinks.map((links) => (
          <Link href={links.link} key={links.link}>
            <a className="font-bold text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white">
              {links.name}
            </a>
          </Link>
        ))}
        <ThemeToggle/>
      </div>
    </nav>
  );
};

export default Navbar;
