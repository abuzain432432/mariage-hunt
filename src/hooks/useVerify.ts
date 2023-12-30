'use client';
import { useMutation } from '@tanstack/react-query';

import { authVerify} from '@/app/api/auth/route';
import { TServerError } from '@/types/types';
import toast from 'react-hot-toast';
import { SignUpResponseType } from '@/types/apiTypes';
import { LINKS } from '@/util';
import { useRouter } from 'next/navigation';

export function useVerify() {
  const router=useRouter()

  return useMutation<SignUpResponseType, TServerError, string>({
    mutationFn: authVerify,
    onSuccess: data => {
      toast.success(data.message)
      router.push(LINKS.QUESTIONS)  
    },
    onError: errr => {
      toast.error(errr?.message as string);
    },
  });
}
