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
      intervalId = setInterval(handleIntervalSelection, 8000); // new interval is twice as long
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
      intervalId = setInterval(handleIntervalSelection, userSelected ? 8000 : 3000);
      return () => clearInterval(intervalId);
    }
  }, [isVisible, topics, userSelected]);

  return (
    <div ref={listRef} className="flex w-full space-x-3 flex-col lg:flex-row h-full ">
      <div className={'flex relative items-center justify-between w-full lg:w-1/2 flex-shrink-0'}>
        <ul className="text-left text-black flex flex-col space-y-6 ">
          {topics.map((topic, index) => (
            <li
              key={`title-${index}-${topic.title}`}
              className={classNames(
                'text-3xl lg:text-3xl focus:text-red-600 active:text-red-600 lg:hover:text-red-600 hover:cursor-pointer transition-colors  ease-in-out',
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
      <ul className="h-80 lg:justify-items-center  flex flex-col justify-start lg:justify-center w-full text-left text-black list-none overflow-y-visible">
        {selected.list.map((item, index) => (
          <li
            key={`${index}-${item}`}
            className="ml-4 mt-5 md:mt-2 lg:ml-0 lg:text-xl text-sm sm:text-lg whitespace-nowrap normal-case transition-all delay-300 duration-300 ease-in-out opacity-0 transform translate-y-2 relative"
            style={{ animation: 'fade-in-move-down 1s forwards' }}
          >
            <span className=" absolute top-1/2 transform -translate-y-1/2 left-[-1.5rem] md:left-[-2.5rem] w-3 h-3 bg-red-900/50 rounded-full"></span>
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
