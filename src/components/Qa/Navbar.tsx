'use client';
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from '@nextui-org/navbar';
import { ButtonUi } from '@/components/ui/ButtonUi';

import Logo from '@/components/ui/Logo';
import { HEADER_HEIGHT } from '@/constants/tailwind';
import { LINKS } from '@/util';

export const Navbar = () => {
  return (
    <header className=''>
      <NextUINavbar
        className='w-full relative px-6 bg-white'
        maxWidth='full'
      >
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
        <NavbarContent
          className='hidden lg:flex gap-6'
          justify='center'
        >
          <ButtonUi
            className='text-white font-semibold text-lg'
            theme='success'
          >
            Cancel Singup
          </ButtonUi>
        </NavbarContent>
      </NextUINavbar>
    </header>
  );
};
