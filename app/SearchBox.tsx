'use client';

import { useRouter } from 'next/navigation';
import type { FC } from 'react';
import { search } from '~service';

type Props = {};

export const SearchBox: FC<Props> = ({}) => {
  const router = useRouter();
  return (
    <form
      className="max-w-6xl mx-auto flex justify-between items-center px-5 space-x-3"
      onSubmit={() => { 
        search();
      }}
    >
      <input
        type="text"
        className="w-full h-14 px-4 placeholder:text-gray-500 outline-none flex-1 bg-transparent dark:text-orange-400 placeholder:italic rounded-sm"
        placeholder="Search by keywords..."
      />
      <button
        type="submit"
        className="text-orange-600 dark:text-orange-400 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  );
};
