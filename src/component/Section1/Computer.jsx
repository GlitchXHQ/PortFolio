import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Computer = () => {
  return (
    <DotLottieReact
      src="./WebDevelopment.json"
      loop
      autoplay
      className='w-[500px] h-[250px]'
    />
  );
};

export default Computer;
