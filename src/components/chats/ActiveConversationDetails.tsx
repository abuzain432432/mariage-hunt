'use client';
import { PAGE_FULL_HEIGHT } from '@/constants/tailwind';
import { Avatar } from '@nextui-org/react';
import { TbBellRingingFilled } from 'react-icons/tb';
import { ImBlocked } from 'react-icons/im';
export default function ActiveConversationDetails() {
  return (
    <div
      className={`col-span-2 overflow-y-auto bg-white   ${PAGE_FULL_HEIGHT}`}
    >
      <div className='flex w-full flex-col items-center py-4'>
        <div className='rounded-full  overflow-hidden bg-gray-300 w-[70px] h-[70px]'>
          <Avatar
            className='w-full h-full'
            alt=''
            src='https://i.pravatar.cc/150?u=a042581f4e29026024d'
          />
        </div>
        <h3 className='text-medium mt-3 leading-[1.1] font-semibold'>
          Umair bajwa
        </h3>
        <p className='text-gray-400 text-sm'>
          last seen today at 09:27
        </p>
      </div>
      <div className='flex justify-center gap-6 my-2 text-black/75'>
        <div className='flex-col flex justify-center cursor-pointer items-center'>
          <TbBellRingingFilled size={22} />
          <p className='text-sm'>Mute</p>
        </div>
        <div className='flex-col flex justify-center cursor-pointer items-center text-red-500'>
          <ImBlocked size={22} />
          <p className='text-sm'>Unblock</p>
        </div>
      </div>
    </div>
  );
}
