'use client';

import { useState } from 'react';
import classNames from 'classnames';

export default function List({ topics }: { topics: { title: string; list: string[] }[] }) {
  const [selected, setSelected] = useState(topics[1]);

  return (
    <div className="flex w-full space-x-3 flex-col md:flex-row">
      <div className={'flex relative items-center justify-between w-1/2 flex-shrink-0'}>
        <ul className="text-left text-white flex flex-col space-y-6 my-10 ">
          {topics.map((topic, index) => (
            <li
              key={`title-${index}-${topic.title}`}
              className={classNames(
                'text-2xl lg:text-3xl font-infant hover:text-red-600 hover:cursor-pointer',
                topic.title === selected.title && 'text-gray-400',
              )}
              onClick={() => setSelected(topic)}
            >
              {topic.title}
            </li>
          ))}
        </ul>
        <div className={'w-[1px] hidden md:flex h-full bg-gray-300 right-10 lg:right-40 sm:right-20 absolute'}></div>
      </div>
      <ul className="flex space-y-3 justify-center flex-col w-full text-left text-white list-disc list-inside marker:text-gray-500 marker:text-4xl ">
        {selected.list.map((item, index) => (
          <li key={`${index}-${item}`} className="text-xl font-sans whitespace-nowrap normal-case font-light">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
