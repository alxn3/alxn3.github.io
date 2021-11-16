import { useState } from 'react';
import { BsChevronDoubleDown } from 'react-icons/bs';
import { FaArrowLeft } from 'react-icons/fa';
import BaseLayout from 'src/layouts/base-layout';
import Footer from 'src/components/footer';
import ShiftingText from 'src/components/shifting-text';
import Section from 'src/components/section';
import Card from 'src/components/card';
import AboutCode from 'src/data/about-code';
import CircleIcon from 'src/components/circle-icon';

const Home = () => {
  const [aboutCodeIndex, setAboutCodeIndex] = useState(-1);
  return (
    <BaseLayout
      headerContent={
        <div className="flex flex-col items-center justify-around h-full md:py-10">
          <div className="flex flex-col-reverse items-center justify-center md:flex-row-reverse md:flex-1 md:space-x-10">
            <div className="w-[16rem] rounded-[min(20rem,50%)] md:w-[min(30%,16rem)] xl:w-[18rem] mt-8 md:mt-0 hover:rounded-[2rem] hover:scale-105 md:hover:scale-110 md:hover:rotate-3 transition-all duration-1000 overflow-hidden peer">
              <img
                src="/panda.jpg"
                className="object-cover h-auto width-full"
                alt="me"
              />
            </div>
            <div className="text-3xl sm:text-4xl xl:text-5xl peer-hover:scale-[1.03] md:peer-hover:scale-105 md:peer-hover:-translate-x-10 transition-transform duration-1000">
              <h1 className="font-semibold ">
                Hello! I&apos;m Alex Lin
                <br />
                and I like to code.
              </h1>
              <div className="sm:p-6">
                <p className="font-light">I&apos;m a...</p>
                <ShiftingText
                  className="ml-0 text-5xl font-black xl:text-6xl md:ml-8"
                  words={[
                    'Programmer',
                    'UX Designer',
                    'SW Engineer',
                    'Student',
                  ]}
                  colors={[
                    'text-primary-500',
                    'text-secondary-500',
                    'text-accent-500',
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-end mt-4 space-y-4 h-1/5">
            <p className="font-mono text-gray-500">
              Scroll down to learn more...
            </p>
            <BsChevronDoubleDown className="animate-bounce" />
          </div>
        </div>
      }
    >
      <div className="flex flex-col items-center justify-center h-full">
        <Section
          title="A little about me"
          description="I write..."
          containerClassName="w-[min(100%,68rem)]"
        >
          <div className="relative mt-4">
            <div
              className={
                aboutCodeIndex == -1
                  ? 'hidden'
                  : 'absolute space-y-4 w-full h-full z-10 p-7 transition-colors duration-300 bg-gray-50 border-2 border-gray-50 rounded-lg dark:border-gray-900 hover:border-primary-500 dark:bg-gray-900 dark:hover:border-primary-500'
              }
            >
              {AboutCode[aboutCodeIndex] !== undefined ? (
                <>
                  <div className="flex justify-between">
                    <h1 className="text-5xl font-bold">
                      {AboutCode[aboutCodeIndex].title}
                    </h1>
                    <CircleIcon
                      icon={
                        <span className="flex gap-2 items-center">
                          <FaArrowLeft />
                          <span className="text-2xl">
                          {AboutCode[aboutCodeIndex].icon}
                          </span>
                        </span>
                      }
                      fontSize="text-xl"
                      padding="p-3"
                      backgroundColor="bg-gray-200 dark:bg-gray-700"
                      hoverBackgroundColor="bg-gradient-to-r from-primary-500 to-secondary-500"
                      onClick={() => setAboutCodeIndex(-1)}
                    />
                  </div>
                  <p className="text-lg font-medium lg:text-xl">
                    {AboutCode[aboutCodeIndex].description}
                  </p>
                </>
              ) : (
                ''
              )}
            </div>
            <div
              className={`relative grid grid-cols-1 gap-4 lg:grid-cols-2 ${
                aboutCodeIndex == -1 ? '' : 'opacity-0'
              }`}
            >
              {AboutCode.map((item, i) => (
                <Card
                  key={i}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                  onClick={() => setAboutCodeIndex(i)}
                />
              ))}
            </div>
          </div>
        </Section>
      </div>
      <div className="flex flex-col items-center justify-center h-2/3">
        <div>
          <h1 className="text-4xl font-black text-transparent sm:text-5xl md:text-6xl bg-clip-text bg-gradient-to-l from-primary-400 to-accent-600">
            Under Construction...
          </h1>
          <p className="text-4xl font-semibold text-right opacity-80">
            More coming soon!
          </p>
        </div>
      </div>
      <Footer />
    </BaseLayout>
  );
};

export default Home;
