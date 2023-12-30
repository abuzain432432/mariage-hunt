import { API_BASE } from '@/constants';
import { ChatMessagesType, UserData } from '@/types/apiTypes';
import { getApiError } from '@/util';

export async function getConversationMessages(id: string | null) {
  const response = await fetch(`${API_BASE}/messages/${id}`, {
    method: 'GET',
    credentials: 'include',
  });

  if (!response.ok) {
    throw await getApiError(response);
  }
  return response.json() as Promise<ChatMessagesType>;
}
