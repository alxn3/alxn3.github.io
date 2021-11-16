import { MouseEventHandler, ReactElement } from 'react';

type Props = {
  icon: string | ReactElement;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  iconColor?: string;
  hoverIconColor?: string;
  padding?: string;
  fontSize?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

const CircleIcon: React.FC<Props> = ({
  icon,
  backgroundColor = 'bg-gray-300 dark:bg-gray-500',
  hoverBackgroundColor = 'bg-gradient-to-br from-primary-500 to-secondary-500',
  iconColor = 'text-black dark:text-white',
  hoverIconColor = 'group-hover:text-white dark:group-hover:text-black',
  padding = 'p-4',
  fontSize = 'text-3xl',
  onClick,
}) => {
  return (
    <div>
      <div
        className={`group relative overflow-hidden rounded-full ${backgroundColor} ${padding} ${fontSize} ${
          onClick ? 'cursor-pointer' : ''
        }`}
        onClick={onClick}
      >
        <div
          className={`absolute top-0 right-0 w-full h-full transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${hoverBackgroundColor}`}
        />
        <span
          className={`relative transition-colors duration-300  ${iconColor} ${hoverIconColor}`}
        >
          {icon}
        </span>
      </div>
    </div>
  );
};

export default CircleIcon;
