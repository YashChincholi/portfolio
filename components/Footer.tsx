import React from 'react';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa6';
import { socialMedia } from '@/data';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full pb-20 mb-[100px] md:mb-5" id="contact">
      <div className="w-full absolute left-0 -bottom-0 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="footer"
          className="w-full h-full opacity-50"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 text-center md:mt-10 my-5">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals
        </p>
        <a href="mailto:yashchincholib@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex justify-between items-center mt-16 md:flex-col flex-row">
        <p className="font-light md:font-normal md:text-base text-sm">
          Copyright © 2024 Yash
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="flex items-center justify-center h-10 w-10 cursor-pointer backdrop-blur-lg backdrop-filter bg-opacity-75 bg-black-200 backdrop-saturate-150 rounded-lg border border-black-300"
            >
              <img src={profile.img} alt="profile" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
