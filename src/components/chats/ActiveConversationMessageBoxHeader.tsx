import { PUBLIC_API_RESOURSES } from '@/constants';
import useConversations from '@/hooks/useConversations';
import useProfile from '@/hooks/useProfile';
import { ConversationMemberType } from '@/types/apiTypes';
import Image from 'next/image';
import { format } from 'timeago.js';

import React from 'react';
import ActiveUserChatHeaderSkleton from '@/components/ui/ActiveUserChatHeaderSkleton';

export default function ActiveConversationMessageBoxHeader({
  activeUserConversationId,
}: {
  activeUserConversationId: string | null;
}) {
  const { data: userData, isLoading: isUserLoading } = useProfile();
  const {
    data: conversationsDetails,
    isLoading: isConversationsDetailsLoading,
  } = useConversations();
  let activeMemberDetails: ConversationMemberType | undefined;
  if (
    activeUserConversationId &&
    !isUserLoading &&
    !isConversationsDetailsLoading
  ) {
    activeMemberDetails = conversationsDetails?.data
      .find(data => data._id === activeUserConversationId)
      ?.members.find(
        memberDetails => userData?.user._id !== memberDetails._id
      );
  }

  if (isConversationsDetailsLoading) {
    return <ActiveUserChatHeaderSkleton />;
  }

  return (
    <div className='mx-auto py-2 px-4 border-b-1 bg-white border-b-gray-200 w-full '>
      <div className='flex gap-4 items-center'>
        <div className='rounded-full  overflow-hidden bg-gray-300 w-[40px] h-[40px]'>
          <Image
            width={40}
            height={40}
            className='w-full h-full'
            alt=''
            src={`${PUBLIC_API_RESOURSES}${activeMemberDetails?.photo}`}
          />
        </div>
        <div>
          <h3 className='text-gray-900 font-semibold'>
            <span>{activeMemberDetails?.firstName}</span>
            <span className='ml-1'>
              {activeMemberDetails?.lastName}
            </span>
          </h3>
          <p className='text-gray-500'>
            last seen
            <span className='ml-1'>
              {format(activeMemberDetails?.lastSeen || new Date())}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
