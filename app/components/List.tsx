'use client';

import classNames from 'classnames';
import { useState, useEffect, useRef } from 'react';

interface Topic {
  title: string;
  list: string[];
}

export default function List({ topics }: { topics: Topic[] }) {
  const [selected, setSelected] = useState(topics[0]);
  const [isVisible, setIsVisible] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  const [userSelected, setUserSelected] = useState(false);
  const listRef = useRef(null);
  let intervalId: NodeJS.Timeout;

  const handleUserSelection = (topic: Topic) => {
    setSelected(topic);
    setUserSelected(true);
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = setInterval(handleIntervalSelection, 10000); // new interval is twice as long
    }
  };

  const handleIntervalSelection = () => {
    setIsChanging(true);
    setSelected((prevSelected) => {
      const currentIndex = topics.findIndex((topic) => topic.title === prevSelected.title);
      const nextIndex = (currentIndex + 1) % topics.length;
      return topics[nextIndex];
    });
    setTimeout(() => setIsChanging(false), 1000); // after 1s remove red color
    setUserSelected(false); // reset user selection flag after automatic selection
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Update our state when observer callback fires
      setIsVisible(entry.isIntersecting);
    });
    if (listRef.current) {
      observer.observe(listRef.current);
    }
    return () => {
      if (listRef.current) {
        observer.unobserve(listRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      intervalId = setInterval(handleIntervalSelection, userSelected ? 10000 : 5000);
      return () => clearInterval(intervalId);
    }
  }, [isVisible, topics, userSelected]);

  return (
    <div ref={listRef} className="flex w-full space-x-3 flex-col lg:flex-row h-full ">
      <div className={'flex relative items-center justify-between w-full lg:w-1/2 flex-shrink-0'}>
        <ul className="text-left text-white flex flex-col space-y-6 my-10 ">
          {topics.map((topic, index) => (
            <li
              key={`title-${index}-${topic.title}`}
              className={classNames(
                'text-3xl lg:text-3xl font-infant focus:text-red-600 active:text-red-600 hover:cursor-pointer transition-colors  ease-in-out',
                topic.title === selected.title &&
                  (isChanging ? 'text-red-600 duration-100' : 'text-gray-400 duration-300'),
              )}
              onClick={() => handleUserSelection(topic)}
            >
              {topic.title}
            </li>
          ))}
        </ul>
        <div className={'w-[1px] hidden lg:flex h-full bg-gray-300 right-10 lg:right-40 sm:right-20 absolute'}></div>
      </div>
      <ul className="h-64  flex flex-col justify-start lg:justify-center w-full text-left text-white list-disc list-inside marker:text-red-900/50 marker:text-4xl overflow-y-visible">
        {selected.list.map((item, index) => (
          <li
            key={`${index}-${item}`}
            className="lg:text-xl text-sm sm:text-lg font-sans whitespace-nowrap normal-case font-light transition-all delay-300 duration-300 ease-in-out opacity-0 transform translate-y-2"
            style={{ animation: 'fade-in-move-down 1s forwards' }}
          >
            {item}
          </li>
        ))}
      </ul>
      <style jsx>{`
        @keyframes fade-in-move-down {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
