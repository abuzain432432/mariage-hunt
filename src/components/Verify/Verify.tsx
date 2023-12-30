'use client';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { AiOutlineMinus } from 'react-icons/ai';
import OtpInput from 'react-otp-input';
import { yupResolver } from '@hookform/resolvers/yup';
import { ButtonUi } from '@/components/ui/ButtonUi';
import { InputError } from '@/components/ui/InputError';
import { useVerify } from '@/hooks/useVerify';
import * as yup from 'yup';
import { useResendOtp } from '@/hooks/useResendOtp';
import { useSearchParams } from 'next/navigation';
import LoadingOverlay from '../ui/LoadingOverlay';

export default function Verify() {
  const searchParams=useSearchParams()
  const { mutate, isPending } = useVerify();
  const {mutate:sendResendOtpReqeust,isPending:isResendOtpPending}=useResendOtp()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    criteriaMode: 'all',
    mode: 'onChange',
    resolver: yupResolver(
      yup.object({
        otp: yup
          .string()
          .required('This field is required')
          .length(6, 'OTP must be 6 digits'), 
      })
    ),
  });

  const handleVerificationSubmit = (values: {otp:string}) => {
    mutate(values.otp);
  };
  const handleResendOtp=()=>{
sendResendOtpReqeust({email:searchParams.get('email') as string})
  }

  return (
    <div className='absolute top-0 left-0 w-full flex justify-center items-center h-full'>
      <div className={`max-w-md w-[90%] overflow-hidden relative flex flex-col p-12 bg-white rounded-3xl `}>
        <LoadingOverlay isActive={isResendOtpPending}/>
        <h1 className='text-5xl text-green-900 my-8 font-extrabold text-center'>
          Check your email
        </h1>
        <form onSubmit={handleSubmit(handleVerificationSubmit)}>
          <section className='flex w-full justify-center'>
            <Controller
              name='otp'
              control={control}
              render={({ field }) => (
                <OtpInput
                  inputStyle={'bg-[#EBEADC] px-6 py-3 rounded-lg text-black'}
                  value={field.value}
                  onChange={(value) => field.onChange(value)}
                  numInputs={6}
                  
                  renderSeparator={<AiOutlineMinus size={14} className='text-gray-800 mx-0.5' />}
                  renderInput={(props) => <input {...props} />}
                />
              )}
            />
          </section>
          <InputError inputName='otp' errors={errors} />

          <div className='flex-1 flex flex-col justify-end mt-16'>
            <ButtonUi
              type='submit'
              loading={isPending}
              theme='success'
              className='text-white w-full px-4 text-center py-2 bg-green-900 duration-150 hover:opacity-90 rounded-full'
            >
              Submit
            </ButtonUi>
            <p className='font-sans mt-2 text-center'>Didn’t receive the message? <span onClick={handleResendOtp} className='text-green-800 font-semibold cursor-pointer'>Resend otp</span> </p> 
          </div>
        </form>
      </div>
    </div>
  );
}
