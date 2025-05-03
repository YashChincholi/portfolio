import React from 'react';
import { InfiniteMovingCards } from './ui/InfiniteMovingCards';
import { companies, testimonials } from '@/data';
import Image from 'next/image';

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading mb-10">
        Kind words by
        <span className="text-purple"> satisfied clients</span>
      </h1>
      <div className="flex flex-col items-center">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
        <div className="flex flex-wrap gap-4 md:gap-16 items-center justify-center max-lg:mt-10">
          {companies.map(({ id, name, img, nameImg }) => (
            <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
              <Image
                src={img}
                alt={name}
                width={40} // md:w-10 = 40px
                height={40}
                className="md:w-10 w-5"
                priority={false}
              />
              <Image
                src={nameImg}
                alt={`${name} logo`}
                width={96} // md:w-24 = 96px
                height={24}
                className="md:w-24 w-20"
                priority={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
