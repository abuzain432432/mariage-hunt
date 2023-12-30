'use client';
import { useMutation } from '@tanstack/react-query';

import { resendOtp } from '@/app/api/auth/route';
import {  ResendOtpType} from '@/types/types';
import { TServerError } from '@/types/types';
import toast from 'react-hot-toast';
import { SignUpResponseType } from '@/types/apiTypes';
import { LINKS } from '@/util';
import { useRouter } from 'next/navigation';

export function useResendOtp() {
  return useMutation<SignUpResponseType, TServerError, ResendOtpType>({
    mutationFn: resendOtp,
    onSuccess: data => {
      toast.success(data.message)
    },
    onError: errr => {
      toast.error(errr?.message as string);
    },
  });
}
