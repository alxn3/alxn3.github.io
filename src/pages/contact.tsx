import React from 'react';
import Footer from 'src/components/footer';
import BaseLayout from 'src/layouts/base-layout';

const Contact = () => {
  return (
    <BaseLayout>
      <div className="flex justify-center h-full flex-col">
        <div className="flex flex-1 items-center justify-center">
          <h1 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-600">
            Under Construction...
          </h1>
        </div>
        <Footer />
      </div>
    </BaseLayout>
  );
};

export default Contact;
