import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Tyewriter = () => {
  return (
      <div className=" py-10 text-center">
      <h1 className="text-3xl md:text-5xl font-bold">
        Welcome to{' '}
        <span className="text-green-700">
          <Typewriter
            words={['Gardening Hub', 'Hydroponics World', 'Composting Tips']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
    </div>
  );
};

export default Tyewriter;