'use client';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { FC } from 'react';

type Props = {};

export const DarkLight: FC<Props> = ({}) => {
  return (
    <div>
      <SunIcon
        className="w-8 aspect-square cursor-pointer text-yellow-500"
        onClick={() => {}}
      />
      <MoonIcon
        className="w-8 aspect-square cursor-pointer text-gray-900"
        onClick={() => {}}
      />
    </div>
  );
};
