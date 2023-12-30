import Message from '@/components/ActiveUserProfile/Message/Message';
import { ACTIVE_CONVERSITION_HEIGHT } from '@/constants/tailwind';
import ActiveUserChatHeader from './ActiveConversationMessageBoxHeader';
import React from 'react';
import MessageInput from './NewMessageInput';
import useConversationMessages from '@/hooks/useConversationMessages';
import useConversations from '@/hooks/useConversations';
import { Spinner } from '@nextui-org/react';

export default function ActiveUserChat({
  activeUserConversationId,
}: {
  activeUserConversationId: string | null;
}) {
  const {
    data: conversationMessages,
    isLoading: isConversatinMessageLoading,
  } = useConversationMessages({
    conversationId: activeUserConversationId as unknown as string,
    retry: false,
    refetchOnWindowFocus: true,
    retryOnMount: false,
  });
  if (!activeUserConversationId) {
    return (
      <div className='col-span-8 border-b-1 bg-gray-100 flex w-full items-center justify-center border-b-gray-200 h-full'>
        No Conversaton Selected
      </div>
    );
  }
  return (
    <div className='col-span-8'>
      <ActiveUserChatHeader
        activeUserConversationId={activeUserConversationId}
      />
      <div
        className={`col-span-8 w-full  px-4 flex py-2  flex-col gap-5 overflow-y-scroll  ${ACTIVE_CONVERSITION_HEIGHT} bg-white`}
      >
        {isConversatinMessageLoading ? (
          <div className='w-full h-full justify-center items-center flex'>
            <Spinner color='success' />
          </div>
        ) : (
          conversationMessages?.data.map(messageDetails => (
            <Message
              message={messageDetails}
              key={messageDetails._id}
            />
          ))
        )}
      </div>
      <MessageInput />
    </div>
  );
}
