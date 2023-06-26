'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import classNames from 'classnames';

export default function CarouselComponent({ images }: { images: string[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevSlide = () => {
    let index = activeIndex;
    let imagesLength = images.length;

    if (index < 1) {
      index = imagesLength;
    }

    --index;

    setActiveIndex(index);
  };

  const goToNextSlide = () => {
    let index = activeIndex;
    let imagesLength = images.length - 1;

    if (index === imagesLength) {
      index = -1;
    }

    ++index;

    setActiveIndex(index);
  };

  useEffect(() => {
    const slideTimer = setInterval(goToNextSlide, 3000);
    return () => clearInterval(slideTimer); // This is important to clear when component unmounts
  }, [activeIndex]);

  return (
    <div className="">
      <button onClick={goToPrevSlide}>
        <ChevronLeftIcon className="h-8 w-8 absolute left-0 text-white z-10 transform -translate-y-1/2 top-1/2 " />
      </button>
      <button onClick={goToNextSlide}>
        <ChevronRightIcon className="h-8 w-8 absolute right-0 text-white z-10 transform -translate-y-1/2 top-1/2" />
      </button>

      <div className="absolute h-1 bottom-10 left-1/2 w-36 transform -translate-x-1/2 z-10 flex justify-between space-x-5">
        {images.map((src, index) => (
          <div
            key={index}
            className={
              index === activeIndex
                ? ' bg-white transition-colors duration-1000 ease-in-out'
                : ' bg-gray-500 transition-colors duration-1000 ease-in-out'
            }
            style={{
              width: `${100 / images.length}%`,
            }}
          ></div>
        ))}
      </div>

      {images.map((src, index) => (
        <div key={index} className="transition-opacity duration-1000 ease-in-out">
          <Image
            className={
              index === activeIndex
                ? 'absolute inset-0 h-full w-full object-cover brightness-150 saturate-0 opacity-100 transition-opacity duration-1000 ease-in-out'
                : 'absolute inset-0 h-full w-full object-cover brightness-150 saturate-0 opacity-0 transition-opacity duration-1000 ease-in-out'
            }
            width={1920}
            height={1080}
            loading="lazy"
            src={src}
            alt=""
          />
        </div>
      ))}
    </div>
  );
}
