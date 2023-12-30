'use client';
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from '@nextui-org/navbar';
import { ButtonUi } from '@/components/ui/ButtonUi';
import { Link } from '@nextui-org/link';

import { link as linkStyles } from '@nextui-org/theme';

import { siteConfig } from '@/config/site';
import NextLink from 'next/link';
import clsx from 'clsx';

import Logo from '@/components/ui/Logo';
import { HEADER_HEIGHT } from '@/constants/tailwind';
import { LINKS } from '@/util';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const pathname = usePathname();
  if (pathname.endsWith(LINKS.QUESTIONS)) {
    return;
  }
  return (
    <NextUINavbar
      height={HEADER_HEIGHT}
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
        {siteConfig.navItems.map(item => (
          <NavbarItem key={item.href}>
            <Link
              as={NextLink}
              className={clsx(
                linkStyles({ color: 'foreground' }),
                'data-[active=true]:text-primary data-[active=true]:font-medium'
              )}
              color='foreground'
              href={item.href}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent className='hidden lg:flex' justify='end'>
        <NavbarItem>
          <ButtonUi
            href={LINKS.LOGIN}
            className='text-green-500 bg-transparent text-lg'
            variant='flat'
          >
            Login
          </ButtonUi>
        </NavbarItem>
        <NavbarItem>
          <ButtonUi
            href={LINKS.REGISTER}
            className='text-white bg-green-500 rounded-full'
            variant='flat'
          >
            Create Account
          </ButtonUi>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className='navigation lg:hidden'>
        <input
          type='checkbox'
          className='navigation__checkbox'
          id='navi-toggle'
        />

        <label htmlFor='navi-toggle' className='navigation__button'>
          <span className='navigation__icon'>&nbsp;</span>
        </label>

        <div className='navigation__background'>&nbsp;</div>

        <nav className='navigation__nav'>
          <ul className='navigation__list'>
            {siteConfig.navItems.map((navLinkItem, i) => (
              <li
                key={navLinkItem.label}
                className='navigation__item'
              >
                <Link
                  as={NextLink}
                  href={navLinkItem.href}
                  className='navigation__link'
                >
                  <span>{(i + 1).toString().padStart(2, '0')}</span>
                  {navLinkItem.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </NavbarContent>
    </NextUINavbar>
  );
};
