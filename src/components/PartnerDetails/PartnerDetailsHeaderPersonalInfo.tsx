import React from 'react';
import img from '@/assets/women.webp';
import Image from 'next/image';
import { BiSolidMessageRoundedDots } from 'react-icons/bi';
import { FaRegHeart } from 'react-icons/fa';
import { MdOutlineBlock } from 'react-icons/md';
import { CiHeart } from 'react-icons/ci';
export default function PartnerDetailsHeaderPersonalInfo() {
  return (
    <div className='  self-stretch w-full relative flex flex-col justify-end'>
      <div className='mb-10'>
        <p className='text-white flex gap-1 text-4xl mb-2'>
          <span className='font-semibold '>Moesha </span>
          <span className=''>26</span>
        </p>
        <p className='text-white flex flex-col leading-[1.1] text-xl mb-3'>
          <span className='font-semibold'>Live in</span>
          <span className='font-thin'>Pakistan, Bahawalpur</span>
        </p>
        <p>
          <span className='border border-gray-500 bg-black/50 px-3 py-1 rounded-full text-white flex justify-center items-center w-fit'>
            Last seen 3 weak ago
          </span>
        </p>
      </div>
      <div className='absolute right-0 flex gap-4 bottom-0'>
        <div className='bg-green-800 flex gap-2 items-center px-3 rounded-full py-2 cursor-pointer text-white'>
          <FaRegHeart size={24} />
          <p className='text-lg  font-semibold'>Like</p>
        </div>
        <div className='bg-green-800 flex gap-2 items-center px-3 rounded-full py-2 cursor-pointer text-white'>
          <BiSolidMessageRoundedDots size={24} />
          <p className='text-lg  font-semibold'>Message Now</p>
        </div>
      </div>
      <div className='bg-red-800 absolute top-0 right-0 w-fit flex gap-2 items-center  rounded-full px-4 py-2 cursor-pointer text-white'>
        <MdOutlineBlock size={24} />
        <p className='text-lg  font-semibold'>Report User</p>
      </div>
      <div className='absolute top-0 left-0 border gap-2 border-gray-500 bg-black/50 px-3 py-1 rounded-full text-white flex justify-center items-center w-fit'>
        <div className='relative'>
          <CiHeart size={24} />
          <span className={'absolute top-0 left-0 translate-y-[20%]'}>
            <CiHeart size={24} />
          </span>
        </div>
        <span className='text-lg'>99</span>
      </div>
    </div>
  );
}
