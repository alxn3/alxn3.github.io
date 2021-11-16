import { MouseEventHandler, ReactElement } from 'react';
import CircleIcon from './circle-icon';

type Props = {
  title: string | ReactElement;
  description: string | ReactElement;
  icon?: string | ReactElement;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

const Card: React.FC<Props> = ({ title, description, icon, onClick }) => {
  return (
    <div
      className={`group grid grid-cols-[auto,1fr] p-4 lg:p-6 space-x-4 transition-colors duration-300 bg-gray-100 border-2 border-gray-100 rounded-lg dark:border-gray-900 hover:bg-gray-50 hover:border-primary-500 dark:bg-gray-900 dark:hover:bg-gray-800 dark:hover:border-primary-500 ${
        onClick ? 'cursor-pointer' : ''
      }`}
      onClick={onClick}
    >
      {icon && <CircleIcon icon={icon} />}
      <div>
        <h1 className="text-2xl font-bold lg:text-3xl">{title}</h1>
        <p className="text-lg font-medium lg:text-xl">{description}</p>
      </div>
    </div>
  );
};

export default Card;
