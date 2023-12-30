'use client';
import { useMutation } from '@tanstack/react-query';

import { postAuthSignup } from '@/app/api/auth/route';
import {  SignupData } from '@/types/types';
import { TServerError } from '@/types/types';
import toast from 'react-hot-toast';
import { SignUpResponseType, UserData } from '@/types/apiTypes';
import { LINKS } from '@/util';
import { useRouter } from 'next/navigation';

export function useSignup() {
  const router=useRouter()

  return useMutation<SignUpResponseType, TServerError, SignupData>({
    mutationFn: postAuthSignup,
    onSuccess: data => {
      toast.success(data.message)
      router.push(LINKS.VERIFY + `?email=${data.user.email}`)  
    },
    onError: errr => {
      toast.error(errr?.message as string);
    },
  });
}
