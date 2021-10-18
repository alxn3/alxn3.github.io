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
    <nav className="flex items-center flex-wrap p-3 flex-col sm:flex-row justify-between">
      <Link href="/">
        <a className="p-2">
          <span className="text-2xl font-bold tracking-wide font-mono text-black dark:text-white">
            Alex Lin
          </span>
        </a>
      </Link>
      <div className="flex flex-row space-x-4 items-center text-lg">
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
