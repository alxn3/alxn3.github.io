import BaseLayout from 'src/layouts/base-layout';
import { BsChevronDoubleDown } from 'react-icons/bs';
import Footer from 'src/components/footer';
import ShiftingText from 'src/components/shifting-text';

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
                    'text-red-500',
                    'text-purple-500',
                    'text-yellow-500',
                    'text-pink-600',
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
      <div className="flex flex-col items-center justify-center h-2/3">
        <div>
          <h1 className="text-4xl font-black text-transparent sm:text-5xl md:text-6xl bg-clip-text bg-gradient-to-r from-red-400 to-yellow-600">
            Under Construction...
          </h1>
          <p className="text-4xl font-semibold text-right opacity-80">
            Coming soon!
          </p>
        </div>
      </div>
      <Footer />
    </BaseLayout>
  );
};

export default Home;
