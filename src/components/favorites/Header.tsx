import React from 'react';

export default function Header() {
  return (
    <div className='flex justify-between mb-5 items-center px-1'>
      <h2 className='font-bold flex gap-1 text-gray-700 text-2xl italic'>
        <span>Favorites </span>
        <span>|</span>
        <span className='text-green-500'>4</span>
      </h2>
    </div>
  );
}
