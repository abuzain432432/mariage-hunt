'use client';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postAuthLogin } from '@/app/api/auth/route';
import { LoginData } from '@/types/types';
import { TServerError } from '@/types/types';
import toast from 'react-hot-toast';

import { PROFILE_QUERY_KEY } from './useProfile';
import { UserData } from '@/types/apiTypes';
import { setCookie } from 'cookies-next';

export function useLogin() {
  const queryClient = useQueryClient();
  return useMutation<UserData, TServerError, LoginData>({
    mutationFn: postAuthLogin,
    onSuccess: data => {
      toast.success(data?.message);
      console.log(data);
      setCookie('jwt', data.token);
      queryClient.setQueryData([PROFILE_QUERY_KEY], data);
    },
    onError: errr => {
      toast.error(errr?.message as string);
    },
  });
}
