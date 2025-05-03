import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import BentoGrid and BentoGridItem
const BentoGrid = dynamic(
  () => import('./ui/BentoGrid').then((mod) => mod.BentoGrid),
  {
    ssr: false, // Disable SSR for client-side rendering only
    loading: () => (
      <div className="w-full h-full bg-gray-300 animate-pulse rounded-lg"></div>
    ),
  },
);

const BentoGridItem = dynamic(
  () => import('./ui/BentoGrid').then((mod) => mod.BentoGridItem),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full bg-gray-300 animate-pulse rounded-lg"></div>
    ), // Placeholder
  },
);

import { gridItems } from '@/data';

const Grid = () => {
  return (
    <section id="about" className="opacity-0 animate-fadeIn">
      <BentoGrid className="w-full py-10">
        {gridItems.map(
          ({
            id,
            title,
            description,
            className,
            imgClassName,
            titleClassName,
            img,
            spareImg,
          }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          ),
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
