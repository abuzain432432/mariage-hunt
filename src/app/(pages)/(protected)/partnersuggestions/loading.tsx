import { Spinner } from '@nextui-org/react';
import React from 'react';

export default function Loading() {
  return (
    <div className='bg-gray-50 font-extrabold h-[50vh] w-full flex justify-center items-center'>
      <Spinner size='lg' color='success' labelColor='success' />
    </div>
  );
}
