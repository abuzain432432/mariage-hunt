'use client';
import { CHAT_CONVERSITION_HEIGHT } from '@/constants/tailwind';
import React from 'react';
import { IoSearch } from 'react-icons/io5';
import RecentConversationItem from './RecentConversationItem';
import { Input } from '@nextui-org/react';
import useConversations from '@/hooks/useConversations';
import useProfile from '@/hooks/useProfile';
import RecentConversationsSkleton from '../ui/RecentConversationsSkleton';
export default function RecentConversations({
  onActiveUser,
  activeConversationId,
}: {
  onActiveUser: (id: string) => void;
  activeConversationId: string;
}) {
  const { data: conversations, isLoading: isConversationsLoading } =
    useConversations();
  const { data: userData, isLoading: isUserLoading } = useProfile();
  const userId = userData?.user._id;

  return (
    <div className={`col-span-2  h-full flex flex-col bg-gray-50`}>
      <div className='w-9/12 mx-auto my-3 '>
        <Input
          radius={'full'}
          startContent={<IoSearch />}
          placeholder='Search a conversition'
          size='sm'
          className={`border-1 border-gray-200 outline-none rounded-full w-full `}
        />
      </div>
      <div
        className={`overflow-y-scroll border-t border-t-gray-200 ${CHAT_CONVERSITION_HEIGHT} px-1 flex flex-col gap-3`}
      >
        {isConversationsLoading || isUserLoading ? (
          <>
            <RecentConversationsSkleton />
          </>
        ) : (
          <>
            {conversations?.data.map(conversation => (
              <RecentConversationItem
                isActive={conversation._id === activeConversationId}
                onActiveUser={onActiveUser}
                userId={userId as string}
                conversation={conversation}
                key={conversation._id}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
