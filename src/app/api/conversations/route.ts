import { API_BASE } from '@/constants';
import { ConversationsType } from '@/types/apiTypes';
import { getApiError } from '@/util';

export async function getConversations() {
  const response = await fetch(`${API_BASE}/conversations`, {
    method: 'GET',
    credentials: 'include',
  });

  if (!response.ok) {
    throw await getApiError(response);
  }
  return response.json() as Promise<ConversationsType>;
}
