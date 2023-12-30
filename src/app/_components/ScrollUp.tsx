/* src/app/_components/ScrollUp.tsx */
'use client';

import React, { useEffect, useState } from 'react';

const ScrollUp: React.FC = () => {
  const [showButton, setShowButton] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY >= 500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ behavior: 'smooth', top: 0 });
  };

  return (
    <div className={`fixed h-10 w-10 pb-1 rounded-full flex justify-center items-center bottom-10 md:bottom-10 right-0 cursor-pointer transition-all ease-out duration-500 z-50 border-solid border-2 border-orange  ${showButton ? 'right-6  md:right-10' : 'translate-x-full '}`} onClick={scrollToTop}>
      <h1 className="text-lg font-bold">↑</h1>
    </div>
  );
};

export default ScrollUp;
