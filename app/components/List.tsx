'use client';

import classNames from 'classnames';
import { useState } from 'react';

export default function List({ topics }: { topics: { title: string; list: string[] }[] }) {
  const [selected, setSelected] = useState(topics[0]);

  return (
    <div className="flex w-full space-x-3 flex-col lg:flex-row h-full ">
      <div className={'flex relative items-center justify-between w-full lg:w-1/2 flex-shrink-0'}>
        <ul className="text-left text-white flex flex-col space-y-6 my-10 ">
          {topics.map((topic, index) => (
            <li
              key={`title-${index}-${topic.title}`}
              className={classNames(
                'text-3xl lg:text-3xl font-infant hover:text-red-600 hover:cursor-pointer transition-colors duration-300 ease-in-out',
                topic.title === selected.title && 'text-gray-400',
              )}
              onClick={() => setSelected(topic)}
            >
              {topic.title}
            </li>
          ))}
        </ul>
        <div className={'w-[1px] hidden lg:flex h-full bg-gray-300 right-10 lg:right-40 sm:right-20 absolute'}></div>
      </div>
      <ul className="h-64  flex flex-col justify-start lg:justify-center w-full text-left text-white list-disc list-inside marker:text-red-800/50 marker:text-4xl overflow-y-auto">
        {selected.list.map((item, index) => (
          <li
            key={`${index}-${item}`}
            className="lg:text-xl text-lg font-sans whitespace-nowrap normal-case font-light transition delay-300 duration-300 ease-in-out "
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
