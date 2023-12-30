'use client';
import { API_BASE, APPLICATION_JSON_HEADER } from '@/constants';
import { setCookie } from 'cookies-next';

import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { loginFormValidationSchema } from '@/validation/validation';
import PrimaryHeading from '@/components/ui/PrimaryHeading';
import { Button, Checkbox, Input } from '@nextui-org/react';
import { yupResolver } from '@hookform/resolvers/yup';

import { LoginData } from '@/types/types';
import { ButtonUi } from '@/components/ui/ButtonUi';

import { InputError } from '@/components/ui/InputError';
import Link from 'next/link';
import { useLogin } from '@/hooks/useLogin';
import useGoBack from '@/hooks/useGoBack';
import { LINKS } from '@/util';

const dontGoBackTo = [LINKS.LOGIN, LINKS.REGISTER];
export default function LoginForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    criteriaMode: 'all',
    mode: 'onChange',
    resolver: yupResolver(
      loginFormValidationSchema({
        email: 'Enter a valid email',
        password: 'This field is requrired',
      }) as any
    ),
  });
  const { mutate, error, isPending } = useLogin();
  const goBack = useGoBack();

  const handleLoginSubmit = (values: LoginData) => {
    mutate(values, {
      onSuccess: () => {
        window.location.reload();
      },
    });
  };
  return (
    <div className='absolute top-0 left-0 w-full flex justify-center items-center  h-full'>
      <div className='max-w-xl w-[90%] px-10 py-12  bg-white rounded-3xl'>
        <PrimaryHeading
          level={1}
          className='text-3xl text-green-900 text-center'
        >
          Welcome back
        </PrimaryHeading>
        <form onSubmit={handleSubmit(handleLoginSubmit)}>
          <div className='mb-5'>
            <Controller
              name='email'
              control={control}
              render={({ field }) => (
                <Input
                  fullWidth
                  label='Email:'
                  color='success'
                  radius='md'
                  size='sm'
                  className='border-1 rounded-lg text-black overflow-hidden  border-green-400'
                  {...field}
                />
              )}
            />
            <InputError inputName='email' errors={errors} />
          </div>

          <div className='mb-5'>
            <Controller
              name='password'
              control={control}
              render={({ field }) => (
                <Input
                  fullWidth
                  label='Password:'
                  color='success'
                  radius='md'
                  size='sm'
                  className='border-1 rounded-lg overflow-hidden  border-green-400'
                  {...field}
                />
              )}
            />
            <InputError inputName='password' errors={errors} />
          </div>

          <div className='flex justify-between mb-4 items-center'>
            <Checkbox color='success'>
              <p>Remember me</p>
            </Checkbox>
            <p>Forgot password?</p>
          </div>
          <ButtonUi
            type='submit'
            theme='success'
            // loading={isPending}
            className='text-lg py-2 px-3 w-full rounded-full uppercase text-white'
          >
            Sign in
          </ButtonUi>
        </form>
        <p className='w-full flex relative justify-center   my-7 uppercase'>
          <span className='w-full  h-[1px] bg-gray-300 absolute left-0  top-[50%] translate-y-[-50%] '></span>
          <span className='text-gray-400 '>or</span>
        </p>

        <ButtonUi
        loading={isPending}
          type='submit'
          theme='success'
          className='text-lg py-2 px-3 w-full bg-gray-200 rounded-full uppercase text-white'
        >
          <FcGoogle size={24} />
        </ButtonUi>
        <p className='mt-6 text-center'>
          Don&apos;t have account ?
          <Link
            className='text-blue-500 inline-block ml-2'
            href={'sign-up'}
          >
            Singup Now
          </Link>
        </p>
      </div>
    </div>
  );
}
