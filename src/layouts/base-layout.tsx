import Head from 'next/head';
import { ReactNode } from 'react';
import Navbar from 'src/components/navbar';

type Props = {
  headerContent?: ReactNode;
  children?: ReactNode;
};

const BaseLayout: React.FC<Props> = ({ headerContent, children }) => {
  return (
    <>
      <Head>
        <title>Alex Lin</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-full w-[min(90%,78rem)] mx-auto">
        {headerContent ? (
          <div className="grid grid-rows-[auto,1fr] h-auto min-h-full">
            <Navbar />
            <div>{headerContent}</div>
          </div>
        ) : (
          <Navbar />
        )}
        {children}
      </main>
    </>
  );
};

export default BaseLayout;
