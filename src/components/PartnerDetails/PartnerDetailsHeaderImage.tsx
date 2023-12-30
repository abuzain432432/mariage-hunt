import Image from 'next/image';
import React from 'react';
import img from '@/assets/women.webp';

export default function PartnerDetailsHeaderImage() {
  return (
    <div>
      <div className='w-[400px] rounded-2xl overflow-hidden relative h-[500px]'>
        <Image
          alt='ls'
          quality={100}
          className='w-full h-full'
          objectPosition='top'
          fill
          sizes='33vw'
          objectFit='cover'
          src={img}
        />
      </div>
    </div>
  );
}
