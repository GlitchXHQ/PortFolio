import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Robot = () => {
  return (
    <DotLottieReact
      src="./RobotBot3D.json"
      loop
      autoplay
      className='w-[650px] h-[450px]'
    />
  );
};

export default Robot;
