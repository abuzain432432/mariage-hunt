import React from 'react';
import loginBg from '@/assets/login-bg.avif';
import { HeroImage } from '@/components/ui/HeroImage';
import { PAGE_FULL_HEIGHT } from '@/constants/tailwind';
import LoginForm from '@/components/login/LoginForm/LoginForm';
// const wait = async () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res('');
//     }, 2000);
//   });
// };
export default async function login() {
  // await wait();
  return (
    <HeroImage
      className={`${PAGE_FULL_HEIGHT}`}
      imgAlt='login'
      imgSrc={loginBg}
    >
      <LoginForm />
      {/* <div className='absolute top-0 left-0 w-full flex justify-center items-center  h-full'>
        <div className='max-w-xl w-[90%] px-10 py-12  bg-white rounded-xl'>
          <PrimaryHeading
            level={1}
            className='text-3xl text-green-900 text-center'
          >
            Welcome back
          </PrimaryHeading>
          <Input
            fullWidth
            label='Email:'
            color='success'
            name='email'
            radius='md'
            size='sm'
            className='border-1 rounded-lg overflow-hidden mb-4 border-green-400'
          />
          <Input
            fullWidth
            label='Password:'
            color='success'
            name='password'
            size='sm'
            className='border-1 rounded-lg overflow-hidden mb-4 border-green-400'
          />

          <div className='flex justify-between mb-4 items-center'>
            <Checkbox color='success'>
              <p>Remember me</p>
            </Checkbox>
            <p>Forgot password?</p>
          </div>

          <ButtonUi
            theme='success'
            className='text-lg py-2 px-3 w-full uppercase text-white'
          >
            Sign in
          </ButtonUi>
        </div>
      </div> */}
      {/* </BreakoutWidth> */}
    </HeroImage>
  );
}
