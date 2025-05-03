'use client';
import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

const NUM_ROWS = 40;
const NUM_COLS = 40;

const colors = [
  '--sky-300',
  '--pink-300',
  '--green-300',
  '--yellow-300',
  '--red-300',
  '--purple-300',
  '--blue-300',
  '--indigo-300',
  '--violet-300',
];

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const colorGrid = useMemo(() => {
    return Array.from({ length: NUM_ROWS }, () =>
      Array.from({ length: NUM_COLS }, () => getRandomColor()),
    );
  }, []);

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
        gridTemplateColumns: `repeat(${NUM_COLS}, 4rem)`,
        gridTemplateRows: `repeat(${NUM_ROWS}, 2rem)`,
      }}
      className={cn(
        'absolute left-1/4 p-4 -top-1/4 w-full h-full z-0 grid',
        className,
      )}
      {...rest}
    >
      {Array.from({ length: NUM_ROWS * NUM_COLS }).map((_, idx) => {
        const row = Math.floor(idx / NUM_COLS);
        const col = idx % NUM_COLS;
        const color = colorGrid[row][col];

        return (
          <motion.div
            key={idx}
            whileHover={{
              backgroundColor: `var(${color})`,
              transition: { duration: 0 },
            }}
            animate={{ transition: { duration: 2 } }}
            className="relative border border-slate-900 w-16 h-8 flex items-center justify-center text-slate-900 pointer-events-none"
          >
            {row % 2 === 0 && col % 2 === 0 && (
              <span className="text-lg font-bold select-none">+</span>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

// Set the display name to avoid ESLint warnings
BoxesCore.displayName = 'BoxesCore';

// Lazy render only when in view
export const Boxes = React.memo(() => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    });

    const el = document.getElementById('boxes-root');
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div id="boxes-root" className="relative w-full h-full">
      {inView && <BoxesCore />}
    </div>
  );
});

// Set the display name for Boxes component
Boxes.displayName = 'Boxes';
