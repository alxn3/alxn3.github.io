import Footer from 'src/components/footer';
import BaseLayout from 'src/layouts/base-layout';

const Contact = () => {
  return (
    <BaseLayout
      headerContent={
        <div className="flex flex-col justify-center h-full">
          <div className="flex items-center justify-center flex-1">
            <h1 className="text-4xl font-black text-center text-transparent xs:text-5xl sm:text-6xl md:text-7xl bg-clip-text bg-gradient-to-r from-accent-500 to-primary-400">
              Under Construction...
            </h1>
          </div>
          <Footer />
        </div>
      }
    ></BaseLayout>
  );
};

export default Contact;
