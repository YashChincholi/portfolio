import { workExperience } from '@/data';
import React from 'react';
import { Button, MovingBorder } from './ui/MovingBorder';
import Image from 'next/image';

const Experience = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading mb-10">
        My
        <span className="text-purple"> work experience</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            borderRadius="1.75rem"
            duration={Math.floor(Math.random() * 10000) + 10000}
            className="flex text-white border-slate-800"
          >
            <div className="flex lg:flex-row flex-col p-3 py-6 md:p-5 lg:p-10 gap-2 lg:items-center">
              <img
                src={card.thumbnail}
                alt="thuambnail"
                className="lg:w-30 md:w-20 w-16"
              />
              <div className="ms-5">
                <h1 className="text-xl md:text-3xl font-bold text-start">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 font-semibold mt-3">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
