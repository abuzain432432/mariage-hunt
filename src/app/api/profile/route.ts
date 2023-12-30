import { API_BASE } from '@/constants';
import { UserData } from '@/types/apiTypes';
import { ProfileUpdateData } from '@/types/types';
import { User } from '@/types/types';
import { getApiError } from '@/util';
// Get current user
export async function getProfile() {
  const response = await fetch(`${API_BASE}/users/me`, {
    method: 'GET',
    credentials: 'include',
  });

  if (!response.ok) {
    throw await getApiError(response);
  }
  return response.json() as Promise<UserData>;
}

// Update current user
export async function putProfile(body: ProfileUpdateData) {
  const response = await fetch(`${API_BASE}/profile`, {
    method: 'PUT',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    throw await getApiError(response);
  }
  return response.json() as Promise<User>;
}
