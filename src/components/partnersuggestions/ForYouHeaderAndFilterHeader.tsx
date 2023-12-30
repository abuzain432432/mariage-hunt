'use client';
import React, { useContext } from 'react';
import { IoFilter } from 'react-icons/io5';
import { DrawerCtx } from './DrawerCtx';

export default function ForYouHeaderAndFilterHeader() {
  const { onToggle } = useContext(DrawerCtx);
  return (
    <div className='flex justify-between mb-5 items-center px-1'>
      <h2 className='font-bold text-gray-700 text-2xl italic'>
        For You
      </h2>
      <div
        onClick={onToggle}
        className='flex gap-2 cursor-pointer hover:opacity-70 items-center'
      >
        <button className='text-lg text-gray-800'>
          Member Preferences
        </button>
        <IoFilter size={20} />
      </div>
    </div>
  );
}
