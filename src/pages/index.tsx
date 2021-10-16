import BaseLayout from 'src/layouts/base-layout';
import { BsChevronDoubleDown } from 'react-icons/bs';
import Image from 'next/image';
import profilePic from 'public/panda.jpg';
import Footer from 'src/components/footer';
import ShiftingText from 'src/components/shifting-text';

const Home = () => {
  return (
    <BaseLayout>
      <div className="flex items-center justify-center h-full flex-col py-10">
        <div className="flex flex-col md:flex-row flex-1 justify-center items-center space-x-10 w-full pb-40">
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
                words={['Programmer', 'UX Designer', 'Engineer', 'Student']}
                colors={['text-red-500', 'text-purple-500', 'text-yellow-500', 'text-pink-600']}
              />
            </div>
          </div>
          <div className="w-1/3 md:w-1/4 mt-8 md:mt-0">
            <Image
              src={profilePic}
              width="1"
              height="1"
              className="object-cover rounded-full"
              alt="me"
              layout="responsive"
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
      <Footer />
    </BaseLayout>
  );
};

export default Home;
