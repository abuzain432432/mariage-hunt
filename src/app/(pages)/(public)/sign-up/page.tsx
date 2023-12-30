import React from 'react';
import { Input, Checkbox } from '@nextui-org/react';
import loginBg from '@/assets/login-bg.avif';
import PrimaryHeading from '@/components/ui/PrimaryHeading';
import { ButtonUi } from '@/components/ui/ButtonUi';
import { HeroImage } from '@/components/ui/HeroImage';
import { PAGE_FULL_HEIGHT } from '@/constants/tailwind';
import SignupForm from '@/components/sign-up/SingupForm/SignupForm';

export default async function login() {
  return (
    <HeroImage
      className={`${PAGE_FULL_HEIGHT}`}
      imgAlt='login'
      imgSrc={loginBg}
    >
      <SignupForm />
    </HeroImage>
  );
}
