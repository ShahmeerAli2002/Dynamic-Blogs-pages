import React from 'react';
import Image from 'next/image';
const Hero: React.FC = () => {
  const [text, setText] = React.useState("");
  const fullText = "Discover Ireland's Epic Causeway Coastal Route";
  
  React.useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setText(fullText.slice(0, currentIndex));
      currentIndex = (currentIndex + 1) % (fullText.length + 1);
    }, 150);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative mt-3">
      <video
        width={1000}
        height={1000}
        src="/image/hero.mp4"
        className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <track kind="captions" />

      </video>      <div className="absolute inset-0 flex items-center justify-center px-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase text-center">
          {text}<span className="animate-blink">|</span>
        </h1>
      </div>
    </div>
  );
};export default Hero;