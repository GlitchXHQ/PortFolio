import React, { useEffect, useState } from 'react';
import Computer from '../Section1/Computer';
const Header = () => {
  const words = ["Web Developer | ", "Designer | ", "BackEnd Developer | ", "AI Enthusiast | ", "Learner"];
  const TYPING_SPEED = 140;
  const PAUSE_TIME = 700;

  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [completed, setCompleted] = useState([]);
  const [isTypingActive, setIsTypingActive] = useState(true);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout = null;

    if (currentWord && text.length < currentWord.length) {
      setIsTypingActive(true);
      timeout = setTimeout(() => {
        setText(current => currentWord.slice(0, current.length + 1));
      }, TYPING_SPEED);

    } else if (currentWord && text.length === currentWord.length) {
      setIsTypingActive(true);
      timeout = setTimeout(() => {
        setCompleted(prev => [...prev, currentWord]);
        setText('');
        setWordIndex(idx => idx + 1);
      }, PAUSE_TIME);
      
    } else if (wordIndex >= words.length) {
      setIsTypingActive(false); 
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [text, wordIndex, words]);

  return (
    <div className='flex mt-10 relative w-full min-h-screen mx-auto'> 
      <div className='max-w-7xl mx-auto px-4 w-full'>
        {/* Timeline Line */}
        <div className='relative flex'>
          {/* Timeline dot and line */}
          <div className='flex flex-col items-center flex-shrink-0'>
            <div className='bg-[#2d208f] border rounded-full w-5 h-5 mt-10'/>
            <div className='h-80 overflow-hidden bg-gradient-to-b from-[#2d208f] to-amber-100 w-1 mt-2'/>
          </div>
          
          {/* Main content row - About section and Computer */}
          <div className='flex-1 ml-8 sm:ml-12 mt-8 relative'>
            <div className='flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 max-w-6xl'>
              {/* About Section */}
              <div className='flex-1 lg:max-w-xl'>
                <div className="text-left">
                  <h1 className="text-white flex flex-col sm:flex-row text-3xl sm:text-6xl font-bold items-start sm:items-center mt-2 cur1">
                    <div>Hi, I'm </div>
                    <div className="text-[#6f5888] font-bold sm:ml-2 mt-1 sm:mt-0">Vivek Chauhan</div>
                  </h1>
                </div>
                
                <div className="mt-6 text-left break-words whitespace-normal text-xl sm:text-2xl opacity-65 text-white">
                  <div className="rotating-text">
                    {completed.map((w, i) => (
                      <span key={i} className="inline-block mr-2 mb-1">
                        {w}
                      </span>
                    ))}
                    {text && <span className="inline-block mr-2">{text}</span>}
                    {isTypingActive && <span className="inline-block animate-pulse">|</span>}
                  </div>
                </div>
                
                <div className='flex flex-col text-white opacity-80 mt-8 cur1'>
                  <div className='text-lg sm:text-xl leading-relaxed'>
                    Dedicated to building web experiences that are both intuitive and engaging.
                  </div>
                  <h4 className='italic cur1 text-sm sm:text-base mt-3 opacity-70'>
                    Currently advancing my technical journey with a B.Tech at IIMT College of Engineering, AKTU.
                  </h4>
                </div>
              </div>
              
              {/* Computer Component */}
              <div className='flex lg:w-auto w-full sm:flex1 justify-center lg:justify-end'>
                <Computer/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;