import Image from 'next/image';
import {
  SiLinkedin,
  SiGithub,
  SiGmail,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
} from 'react-icons/si';

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

const contactClassName = 'opacity-80 hover:opacity-100 transition-opacity';
const contact = [
  {
    name: 'GitHub',
    icon: <SiGithub className={contactClassName} />,
    url: 'https://github.com/alxn3',
  },
  {
    name: 'LinkedIn',
    icon: <SiLinkedin className={contactClassName} />,
    url: 'https://www.linkedin.com/in/alexlin03/',
  },
  {
    name: 'Mail',
    icon: <SiGmail className={contactClassName} />,
    url: 'mailto:contact@alexlin.me',
  },
];

type Props = {
  className?: string;
};

const Footer: React.FC<Props> = ({ className }) => {
  return (
    <footer
      className={`flex p-4 flex-col items-center space-y-1 ${className || ''}`}
    >
      <div className="flex text-2xl space-x-3 mb-1">
        {contact.map((elem, i) => (
          <span key={i} className="inline-block ml-2">
            <a
              href={elem.url}
              title={elem.name}
              rel="noreferrer"
              target="_blank"
            >
              {elem.icon}
            </a>
          </span>
        ))}
      </div>
      <p className="text-sm">Copyright © {new Date().getFullYear()} Alex Lin. All rights reserved.</p>
      <p className="font-regular text-sm">
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
