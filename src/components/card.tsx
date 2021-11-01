import { ReactElement } from 'react';

type Props = {
  title: string | ReactElement;
  description: string | ReactElement;
  icon?: string | ReactElement;
};

const Card: React.FC<Props> = ({ title, description, icon }) => {
  return (
    <div className="flex items-center p-4 space-x-4 transition-colors duration-300 bg-gray-100 border-2 border-gray-100 rounded-lg dark:border-gray-800 hover:bg-gray-50 hover:border-primary-500 dark:bg-gray-800 dark:hover:bg-gray-700 group">
      {icon && (
        <div className="relative p-4 overflow-hidden text-3xl bg-gray-300 rounded-full dark:bg-gray-500">
          <div className="absolute top-0 right-0 w-full h-full transition-opacity duration-300 opacity-0 bg-gradient-to-br from-primary-500 to-secondary-500 group-hover:opacity-100" />
          <span className="relative text-black transition-colors duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black">
            {icon}
          </span>
        </div>
      )}
      <div>
        <h1 className="text-xl font-semibold">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
