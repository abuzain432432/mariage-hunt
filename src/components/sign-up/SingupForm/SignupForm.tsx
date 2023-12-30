'use client';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { singupFormValidationSchema } from '@/validation/validation';
import PrimaryHeading from '@/components/ui/PrimaryHeading';
import { Checkbox, Input } from '@nextui-org/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Toaster } from 'react-hot-toast';
import { SignupData } from '@/types/types';
import { ButtonUi } from '@/components/ui/ButtonUi';
import { InputError } from '@/components/ui/InputError';
import Link from 'next/link';
import { useSignup } from '@/hooks/useSignup';

export default function SignupForm() {
  const { mutate, isPending } = useSignup();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    criteriaMode: 'all',
    mode: 'onChange',
    resolver: yupResolver(
      singupFormValidationSchema({
        firstName: 'This field is requrired',
        email: 'Enter a valid email',
        lastName: 'This field is requrired',
        password: 'This field is required',
        passwordConfirm: 'This field is required',
      }) as any
    ),
  });

  const handleLoginSubmit = (values: SignupData) => {
    mutate(values)
  };
  return (
    <div className='absolute top-0 left-0 w-full flex justify-center items-center  h-full'>
      <div className='max-w-xl w-[90%] px-10 py-8  bg-white rounded-3xl'>
        <PrimaryHeading
          level={1}
          className='text-3xl text-green-900 text-center'
        >
          Join Now
        </PrimaryHeading>
        <form onSubmit={handleSubmit(handleLoginSubmit)}>
          <div className='mb-5'>
            <Controller
              name='firstName'
              control={control}
              render={({ field }) => (
                <Input
                  fullWidth
                  label='First Name:'
                  color='success'
                  radius='md'
                  size='sm'
                  className='border-1 rounded-lg text-black overflow-hidden  border-green-400'
                  {...field}
                />
              )}
            />
            <InputError inputName='firstName' errors={errors} />
          </div>

          <div className='mb-5'>
            <Controller
              name='lastName'
              control={control}
              render={({ field }) => (
                <Input
                  fullWidth
                  label='Last Name:'
                  color='success'
                  radius='md'
                  size='sm'
                  className='border-1 rounded-lg text-black overflow-hidden  border-green-400'
                  {...field}
                />
              )}
            />
            <InputError inputName='lastName' errors={errors} />
          </div>

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

          <div className='mb-5'>
            <Controller
              name='passwordConfirm'
              control={control}
              render={({ field }) => (
                <Input
                  fullWidth
                  label='Confirm password:'
                  color='success'
                  radius='md'
                  size='sm'
                  className='border-1 rounded-lg overflow-hidden  border-green-400'
                  {...field}
                />
              )}
            />
            <InputError inputName='passConfirm' errors={errors} />
          </div>

          <ButtonUi
            type='submit'
            loading={isPending}
            theme='success'
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
      
          type='submit'
          theme='success'
          className='text-lg py-2 px-3 w-full bg-gray-200 rounded-full uppercase text-white'
        >
          <FcGoogle size={24} />
        </ButtonUi>
        <p className='mt-6 text-center'>
          Already have account ?
          <Link
            className='text-blue-500 inline-block ml-2'
            href={'login'}
          >
            Login Now
          </Link>
        </p>
      </div>
    </div>
  );
}
