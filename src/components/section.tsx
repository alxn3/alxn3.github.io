import { ReactElement, ReactNode } from 'react';

type Props = {
  title: string | ReactElement;
  description?: string | ReactElement;
  children: ReactNode;
  id?: string;
  containerClassName?: string;
  headerClassName?: string;
  descriptionClassName?: string;
};

const Section: React.FC<Props> = ({
  title,
  description,
  children,
  id,
  containerClassName,
  headerClassName,
  descriptionClassName,
}) => {
  return (
    <section id={id} className={`p-8 m-2 ${containerClassName || ''}`}>
      <h1 className={`text-5xl md:text-6xl font-bold ${headerClassName || ''}`}>
        {title}
      </h1>
      <p
        className={`text-3xl md:text-4xl font-light mt-2 ${
          descriptionClassName || ''
        }`}
      >
        {description}
      </p>
      {children}
    </section>
  );
};

export default Section;
