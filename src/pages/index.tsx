import BaseLayout from 'src/layouts/base-layout';
import { BsChevronDoubleDown, BsLightningFill } from 'react-icons/bs';
import { GiOpenBook } from 'react-icons/gi';
import { FaBug, FaRecycle } from 'react-icons/fa';
import Footer from 'src/components/footer';
import ShiftingText from 'src/components/shifting-text';
import Section from 'src/components/section';
import Card from 'src/components/card';

const Home = () => {
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
          containerClassName="min-w-[80%]"
        >
          <div className="grid grid-cols-1 gap-4 pt-4 lg:grid-cols-2">
            <Card
              title="Blazing fast code"
              description={
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
              }
              icon={<BsLightningFill />}
            />
            <Card
              title="Reusable and robust code"
              description="Why do things twice when you can do it once?"
              icon={<FaRecycle />}
            />
            <Card
              title="Bug-free code"
              description="Well most of the time... Everyone makes mistakes."
              icon={<FaBug />}
            />
            <Card
              title="Extremely readable code"
              description="You can read it like an open book."
              icon={<GiOpenBook />}
            />
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
