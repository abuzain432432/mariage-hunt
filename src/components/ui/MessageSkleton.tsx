import { Skeleton } from '@nextui-org/react';
import React from 'react';

export default function MessageSkleton() {
  return (
    <div
      className={`px-2 max-w-[55%] py-2 grid duration-100   gap-x-2 items-center grid-cols-7 `}
    >
      <Skeleton className='rounded-full w-[40px] h-[40px]'></Skeleton>
      <div className='col-span-6 ml-3'>
        <Skeleton className='w-fit h-[20px] mb-1 rounded-lg'>
          Lorem Lorem Lorem
        </Skeleton>
        <Skeleton className=' h-[30px] rounded-lg'></Skeleton>
      </div>
    </div>
  );
}
