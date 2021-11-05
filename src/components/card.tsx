import { ReactElement } from 'react';

type Props = {
  title: string | ReactElement;
  description: string | ReactElement;
  icon?: string | ReactElement;
};

const Card: React.FC<Props> = ({ title, description, icon }) => {
  return (
    <div className="grid grid-cols-[auto,1fr] p-4 lg:p-6 space-x-4 transition-colors duration-300 bg-gray-100 border-2 border-gray-100 rounded-lg dark:border-gray-900 hover:bg-gray-50 hover:border-primary-500 dark:bg-gray-900 dark:hover:bg-gray-800 dark:hover:border-primary-500 group">
      {icon && (
        <div>
          <div className="relative p-4 overflow-hidden text-3xl bg-gray-300 rounded-full dark:bg-gray-500">
            <div className="absolute top-0 right-0 w-full h-full transition-opacity duration-300 opacity-0 bg-gradient-to-br from-primary-500 to-secondary-500 group-hover:opacity-100" />
            <span className="relative text-black transition-colors duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black">
              {icon}
            </span>
          </div>
        </div>
      )}
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold">{title}</h1>
        <p className="text-lg lg:text-xl font-medium">{description}</p>
      </div>
    </div>
  );
};

export default Card;
