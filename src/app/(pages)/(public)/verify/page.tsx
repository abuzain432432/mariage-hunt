import { HeroImage } from '@/components/ui/HeroImage';
import { PAGE_FULL_HEIGHT } from '@/constants/tailwind';
import React from 'react'
import loginBg from '@/assets/login-bg.avif';
import Verify from '@/components/Verify/Verify';
export default function page() {
  return (
    <HeroImage
      className={`${PAGE_FULL_HEIGHT}`}
      imgAlt='login'
      imgSrc={loginBg}
    >
    <Verify/>
    </HeroImage>
  )
}
