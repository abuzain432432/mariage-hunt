import React from 'react';
import AvatarSkleton from './AvatarSkleton';
import { Skeleton } from '@nextui-org/react';

export default function ActiveUserChatHeaderSkleton() {
  return (
    <div className='mx-auto py-2 px-4 border-b-1 bg-white border-b-gray-200 w-full '>
      <div className='flex gap-4 items-center'>
        <AvatarSkleton />
        <div>
          <h3 className='text-gray-900 font-semibold'>
            <Skeleton />
          </h3>
          <p className='text-gray-500'>
            <Skeleton />
          </p>
        </div>
      </div>
    </div>
  );
}
