import BaseLayout from 'src/layouts/base-layout';
import { BsChevronDoubleDown } from 'react-icons/bs';
import Footer from 'src/components/footer';
import ShiftingText from 'src/components/shifting-text';

const Home = () => {
  return (
    <BaseLayout>
      <div className="flex items-center justify-around md:justify-center h-full flex-col md:py-10">
        <div className="flex flex-col md:flex-row md:flex-1 justify-center items-center space-x-10 w-full md:pb-40">
          <div>
            <h1 className="text-3xl sm:text-4xl font-semibold">
              Hello! I&apos;m Alex Lin
              <br />
              and I like to code.
            </h1>
            <div className="p-4">
              <p className="text-2xl sm:text-3xl font-light">I&apos;m a...</p>
              <ShiftingText
                className="text-5xl font-black ml-0 md:ml-8"
                words={['Programmer', 'UX Designer', 'SW Engineer', 'Student']}
                colors={[
                  'text-red-500',
                  'text-purple-500',
                  'text-yellow-500',
                  'text-pink-600',
                ]}
              />
            </div>
          </div>
          <div className="w-72 md:w-50 mt-8 md:mt-0">
            <img
              src="/panda.jpg"
              className="object-cover rounded-full width-full h-auto"
              alt="me"
            />
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <p className="font-mono text-gray-500">
            Scroll down to learn more...
          </p>
          <BsChevronDoubleDown className="animate-bounce" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-2/3">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-600">
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
