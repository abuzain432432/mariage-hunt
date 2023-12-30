'use client';
import { useQuery } from '@tanstack/react-query';
import { TServerError } from '@/types/types';

import { getConversations } from '@/app/api/conversations/route';
import { ConversationsType } from '@/types/apiTypes';

export const CONVERSATIONS_QUERY_KEY = 'conversations';
export function useConversations(
  { retry, retryOnMount, refetchOnWindowFocus } = {
    retry: false,
    refetchOnWindowFocus: false,
    retryOnMount: false,
  }
) {
  return useQuery<ConversationsType, TServerError>({
    queryKey: [CONVERSATIONS_QUERY_KEY],
    queryFn: getConversations,
    retry,
    refetchOnWindowFocus,
    retryOnMount,
  });
}

export default useConversations;
