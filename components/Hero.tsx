import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { Boxes } from './ui/background-boxes';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa6';

const Hero = () => {
  return (
    <div className="pt-36 pb-20">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full w-[50vw] h-[80vh]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 w-[50vw] h-[80vh]" fill="blue" />
      </div>

      <div className="h-screen absolute w-full overflow-hidden bg-black-100 flex flex-col items-center justify-center rounded-lg top-0 left-0">
        <div className="absolute inset-0 w-full h-full bg-black-100 z-5 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col justify-center items-center">
          <h2 className="uppercase text-xs text-center tracking-widest text-blue-100 max-w-80">
            Dynamic Webmagic With React.js
          </h2>

          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[45xl] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-10 text-sm md:text-lg lg:text-2xl text-blue-100">
            Hi! I&apos;m Yash, a 3D Web Developer based in Thane,India.
          </p>

          <a href="#about">
            <MagicButton
              title="Show my work"
              position="right"
              icon={<FaLocationArrow />}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
