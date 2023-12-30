'use client';
import { useQuery } from '@tanstack/react-query';
import { TServerError } from '@/types/types';

import { ChatMessagesType } from '@/types/apiTypes';
import { getConversationMessages } from '@/app/api/messages/route';

export const CONVERSATIONS_MESSAGE_QUERY_KEY =
  'conversation-messages';
export function useConversationMessages(
  { retry, retryOnMount, refetchOnWindowFocus, conversationId } = {
    retry: false,
    refetchOnWindowFocus: false,
    retryOnMount: false,
    conversationId: '',
  }
) {
  return useQuery<ChatMessagesType, TServerError>({
    queryKey: [CONVERSATIONS_MESSAGE_QUERY_KEY, conversationId],
    queryFn: getConversationMessages.bind(null, conversationId),
    retry,
    refetchOnWindowFocus,
    retryOnMount,
  });
}

export default useConversationMessages;
