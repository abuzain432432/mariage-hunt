import { Avatar } from '@nextui-org/react';
import React from 'react';
import { format } from 'timeago.js';
import {
  ConversationMemberType,
  ConversationsItemType,
} from '@/types/apiTypes';
import { PUBLIC_API_RESOURSES } from '@/constants';
import Image from 'next/image';

export default function RecentConversationItem({
  isActive,
  conversation,
  userId,
  onActiveUser,
}: {
  isActive?: boolean;
  conversation: ConversationsItemType;
  userId: string;
  onActiveUser: (id: string) => void;
}) {
  let onlineFriend: ConversationMemberType | undefined =
    conversation?.members.find(member => member._id !== userId);

  return (
    <div
      onClick={onActiveUser.bind(null, conversation?._id)}
      className={`px-2 py-2 grid cursor-pointer duration-100 hover:bg-gray-200  gap-x-2 items-center grid-cols-7 ${
        isActive ? 'bg-gray-200' : 'bg-gray-100'
      }`}
    >
      <div className='rounded-full overflow-hidden bg-gray-300 w-[40px] h-[40px]'>
        <Image
          className='w-full h-full'
          alt=''
          width={50}
          height={50}
          src={`${PUBLIC_API_RESOURSES}${onlineFriend?.photo}`}
        />
      </div>
      <div className='col-span-6 ml-3 '>
        <h3 className='text-medium font-semibold'>
          {onlineFriend?.firstName || ''}
          <span className='ml-1 inline-block'>
            {onlineFriend?.lastName || ''}
          </span>
        </h3>
        <p className='text-sm text-gray-500 items-end'>
          Last seen {format(onlineFriend?.lastSeen || new Date())}
        </p>
      </div>
    </div>
  );
}
