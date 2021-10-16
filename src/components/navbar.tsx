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
    <nav className="flex items-center flex-wrap bg-white p-3 ">
      <Link href="/">
        <a className="inline-flex items-center p-2 mr-4">
          <span className="text-xl text-black font-bold uppercase tracking-wide">
            Alex Lin
          </span>
        </a>
      </Link>
      <div className="ml-auto inline-flex flex-row">
        {NavLinks.map((links) => (
          <Link href={links.link} key={links.link}>
            <a className="px-3 py-2 rounded text-gray-700 font-bold items-center justify-center hover:text-black">
              {links.name}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;