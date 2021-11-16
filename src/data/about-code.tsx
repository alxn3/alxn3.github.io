import { ReactElement } from 'react';
import { BsLightningFill } from 'react-icons/bs';
import { GiOpenBook } from 'react-icons/gi';
import { FaBug, FaRecycle } from 'react-icons/fa';

type AboutCodeType = {
  title: string | ReactElement;
  description: string | ReactElement;
  extendedDescription?: string | ReactElement;
  icon?: string | ReactElement;
};

const AboutCode: AboutCodeType[] = [
  {
    title: 'Blazing fast code',
    description: (
      <>
        Check out my{' '}
        <a
          href="https://leetcode.com/alxn3/"
          target="_blank"
          rel="noreferrer"
          className="text-primary-500 hover:underline"
        >
          LeetCode profile
        </a>
        .
      </>
    ),
    icon: <BsLightningFill />,
  },
  {
    title: 'Reusable and robust code',
    description: (
      <>
        Why do things twice when you can do it once?
      </>
    ),
    icon: <FaRecycle />,
  },
  {
    title: 'Bug-free code',
    description:
      'Well most of the time... Everyone makes mistakes. The debugger is my best friend and I test my code heavily.',
    icon: <FaBug />,
  },
  {
    title: 'Extremely readable code',
    description: 'You can read it like an open book.',
    icon: <GiOpenBook />,
  },
];

export default AboutCode;
