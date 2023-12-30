import { API_BASE, APPLICATION_JSON_HEADER } from '@/constants';
import { SignUpResponseType, UserData } from '@/types/apiTypes';
import { ResendOtpType, ResponseMessage } from '@/types/types';
import { SignupData, LoginData } from '@/types/types';
import { getApiError } from '@/util';

export async function postAuthLogin(body: LoginData) {
  const response = await fetch(`${API_BASE}/users/login`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      ...APPLICATION_JSON_HEADER,
    },
    body: JSON.stringify(body),
  });

  console.log('ERROR');
  if (!response.ok) {
    throw await getApiError(response);
  }
  return response.json() as Promise<UserData>;
}

export async function postAuthSignup(body: SignupData) {
  const response = await fetch(`${API_BASE}/users/signup`, {
    method: 'POST',
    headers: {
      ...APPLICATION_JSON_HEADER,
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    throw await getApiError(response);
  }
  return response.json() as Promise<SignUpResponseType>;
}



export async function authVerify(otp: string) {
  const response = await fetch(`${API_BASE}/users/activate/${otp}`, {
    method: 'GET',
    headers: {
      ...APPLICATION_JSON_HEADER,
    },
  });
  if (!response.ok) {
    throw await getApiError(response);
  }
  return response.json() as Promise<SignUpResponseType>;
}


export async function resendOtp(body: ResendOtpType) {
  const response = await fetch(`${API_BASE}/users/resendsignupotp`, {
    method: 'POST',
    headers: {
      ...APPLICATION_JSON_HEADER,
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    throw await getApiError(response);
  }
  return response.json() as Promise<SignUpResponseType>;
}

// Logout
export async function deleteAuth(user_id: number) {
  const response = await fetch(`${API_BASE}/auth`, {
    method: 'DELETE',
    body: JSON.stringify({ user_id }),
  });
  if (!response.ok) {
    throw await getApiError(response);
  }
  return response.json() as Promise<ResponseMessage>;
}
