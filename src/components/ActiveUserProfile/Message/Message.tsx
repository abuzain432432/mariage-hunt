import { Avatar } from '@nextui-org/react';
import React from 'react';
import Img from '@/assets/landing-mobile-bg.jpg';
import useProfile from '@/hooks/useProfile';
import { ChatMessageItemType } from '@/types/apiTypes';
import Image from 'next/image';
import { PUBLIC_API_RESOURSES } from '@/constants';
import useConversations from '@/hooks/useConversations';
import MessageSkleton from '@/components/ui/MessageSkleton';

export default function Message({
  message,
}: {
  message: ChatMessageItemType;
}) {
  const { data: userData, isLoading: isUserLoading } = useProfile();
  if (isUserLoading) {
    return <MessageSkleton />;
  }
  const isOwnMessage = message.sender === userData?.user._id;

  return (
    <div
      className={`max-w-[55%]  flex items-center gap-4 mx-4 ${
        isOwnMessage ? 'ml-auto' : 'mr-auto'
      }`}
    >
      <div className='rounded-full  overflow-hidden bg-gray-300 w-[40px] h-[40px]'>
        {/* <Image
          width={100}
          height={100}
          className='w-full h-full'
          alt=''
          src={''}
          // src={`${PUBLIC_API_RESOURSES}${message?.conversation}`}
        /> */}
      </div>
      <p
        className={` col-span-11  w-fit leading-[1.2] shadow-md px-4 py-3 rounded-2xl  ${
          isOwnMessage
            ? 'bg-[hsl(145,50%,40%)] text-white '
            : 'bg-gray-200 '
        }`}
      >
        {message?.text}
      </p>
    </div>
  );
}
