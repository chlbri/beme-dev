import { Bars3Icon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { FC } from 'react';
import { DarkLight } from './DarkLight';
import { NavLinks } from './NavLinks';
import { SearchBox } from './SearchBox';

type Props = {};

export const Header: FC<Props> = ({}) => {
  return (
    <header>
      <div className="grid grid-cols-3 p-10 items-center">
        <Bars3Icon className="h-8 aspect-square cursor-pointer" />
        <Link href="/" prefetch={false}>
          <h1 className="font-serif text-5xl text-center underline decoration-orange-600 dark:decoration-orange-400 underline-offset-4 decoration-4">
            beme.news
          </h1>
        </Link>

        <div className="flex items-center justify-end space-x-2">
          <DarkLight />
          <button className="hidden md:inline bg-slate-900 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800">
            Subscribe Now
          </button>
        </div>
      </div>
      <div>
        <NavLinks />
        {/* NavLinks */}

        {/* Searchbox */}
        <SearchBox />
      </div>
    </header>
  );
};
