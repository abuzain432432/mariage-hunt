'use client';
import React, { useContext } from 'react';
import { IoFilter } from 'react-icons/io5';

export default function Header() {

  return (
    <div className='flex justify-between mb-5 items-center px-1'>
      <h2 className='font-bold text-gray-700 text-2xl italic'>
        Near you
      </h2>
      <div
  
        className='flex gap-2 cursor-pointer hover:opacity-70 items-center'
      >
        <button className='text-lg text-gray-800'>
        Customize search 
        </button>
        <IoFilter size={20} />
      </div>
    </div>
  );
}
