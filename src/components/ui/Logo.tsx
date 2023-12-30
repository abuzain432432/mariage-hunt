// 'use client';
import React from 'react';
import { Image } from '@nextui-org/react';
import NextImage from 'next/image';
import logo from '@/assets/logo.png';

export default function Logo() {
  return (
    <div className='w-auto h-[50px]'>
      <Image
        placeholder='blur'
        as={NextImage}
        width={200}
        height={50}
        className='w-auto h-auto opacity-100 object-cover'
        src={logo as unknown as string}
        alt='MeriaHunt'
      />
    </div>
  );
}
