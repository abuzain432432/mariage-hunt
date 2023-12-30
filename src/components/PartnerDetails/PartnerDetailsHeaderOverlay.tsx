import Image from 'next/image';
import React from 'react';
import img from '@/assets/women.webp';

export default function PartnerDetailsHeaderOverlay() {
  return (
    <div className=' scale-150 absolute inset-0 h-full shadow-lg cursor-pointer overflow-hidden '>
      <Image
        alt='ls'
        quality={50}
        objectPosition='center'
        fill
        layout='fill'
        objectFit='cover'
        src={img}
      />
      <div className='absolute  inset-0 bg-black/40 '></div>
    </div>
  );
}
