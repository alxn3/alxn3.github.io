import Link from 'next/link';

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
          <span className="text-2xl text-black font-bold tracking-wide font-mono">
            Alex Lin
          </span>
        </a>
      </Link>
      <div className="flex flex-row space-x-4">
        {NavLinks.map((links) => (
          <Link href={links.link} key={links.link}>
            <a className="text-gray-700 font-bold hover:text-black">
              {links.name}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
