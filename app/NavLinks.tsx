'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';
import { CATEGORIES, Category } from '../lib/entities/strings';

type NavLinkProps = {
  category: string;
  isActive: boolean;
};

const NavLink: FC<NavLinkProps> = ({ category, isActive }) => {
  return (
    <Link
      href={`/news/${category}`}
      prefetch={false}
      className={clsx(
        'hover:underline decoration-orange-400 text-center decoration-2 active:underline underline-offset-8 rounded-full p-4 cursor-pointer capitalize hover:scale-110 transition-transform duration-200 ease-out',
        {
          'underline decoration-orange-600 dark:decoration-orange-400 underline-offset-4 font-bold text-lg':
            isActive,
        },
      )}
    >
      {category}
    </Link>
  );
};

export const NavLinks: FC = () => {
  const path = usePathname();

  const isActive = (category: Category) => {
    return path?.split('/').pop() === category;
  };
  return (
    <nav className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 text-xs md:text-sm gap-4 pb-10 max-w-6xl mx-auto border-b">
      {CATEGORIES.map(category => {
        return (
          <NavLink
            key={category}
            category={category}
            isActive={isActive(category)}
          />
        );
      })}
    </nav>
  );
};
