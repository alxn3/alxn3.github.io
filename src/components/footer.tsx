import Image from 'next/image';
import { SiNextdotjs, SiReact, SiTailwindcss } from 'react-icons/si';

const madeWith = [
  {
    name: 'React',
    icon: <SiReact />,
    url: 'https://reactjs.org/',
  },
  {
    name: 'Next.js',
    icon: <SiNextdotjs />,
    url: 'https://nextjs.org/',
  },
  {
    name: 'TailwindCSS',
    icon: <SiTailwindcss />,
    url: 'https://tailwindcss.com/',
  },
];

type Props = {
  className?: string;
}

const Footer: React.FC<Props> = ({className}) => {
  return (
    <footer className={`flex p-4 flex-col items-center ${className || ''}`}>
      <p className="font-regular text-md">
        Powered by
        {madeWith.map((elem, i) => (
          <span key={elem.name}>
            {i > 0 && ','}
            {i == madeWith.length - 1 && ' and'}
            <span className="inline-block ml-2">
              <a
                href={elem.url}
                title={elem.name}
                rel="noreferrer"
                target="_blank"
              >
                {elem.icon}
              </a>
            </span>
          </span>
        ))}
        .
      </p>
    </footer>
  );
};

export default Footer;
