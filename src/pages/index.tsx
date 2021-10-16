import BaseLayout from 'src/layouts/base-layout';
import { BsChevronDoubleDown } from 'react-icons/bs';
import Image from 'next/image';
import profilePic from 'public/panda.jpg';
import Footer from 'src/components/footer';

const Home = () => {
  return (
    <BaseLayout>
      <div className="flex items-center justify-center h-full flex-col py-10">
        <div className="flex flex-1 justify-center items-center space-x-10 w-full pb-40">
          <div>
            <h1 className="text-3xl sm:text-4xl font-semibold">
              Hello! I&apos;m Alex Lin
              <br />
              and I like to code.
            </h1>
            <p className="text-2xl sm:text-3xl p-4 font-light">I&apos;m a...</p>
          </div>
          <div className="w-1/4 lg:w-1/6">
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
          <p className="font-mono text-gray-500">Scroll down to learn more...</p>
          <BsChevronDoubleDown className="animate-bounce"/>
        </div>
      </div>
      <Footer />
    </BaseLayout>
  );
};

export default Home;
