import NextLink from 'next/link';
import { RiMessage3Fill } from 'react-icons/ri';
import { FaUsers } from 'react-icons/fa';
import { Avatar, Link } from '@nextui-org/react';
import Logo from '@/components/ui/Logo';
import { LINKS } from '@/util';
import React from 'react';
import { DASHBOARD_HEADER_HEIGHT } from '@/constants/tailwind';
import clsx from 'clsx';
export default function ProtectedLayouNavbar({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={clsx(
        `shadow-md flex items-center bg-white w-full border-b-1 border-b-gray-200 ${DASHBOARD_HEADER_HEIGHT}`
      )}
    >
      <nav
        className={clsx(
          'flex w-full  items-center mx-10 justify-between',
          className
        )}
      >
        <div className='w-fit'>
          <Logo />
        </div>
        <ul className='flex items-center mr-6 gap-9 '>
          <li>
            <Link
              className='flex gap-2 text-green-500 font-semibold'
              href={LINKS.PARTNER_SUGGESTION}
              as={NextLink}
            >
              <FaUsers size={28} />
              <span> People</span>
            </Link>
          </li>
          <li>
            <Link
              className='flex gap-2 text-green-500 font-semibold'
              href={LINKS.CHATS}
              as={NextLink}
            >
              <RiMessage3Fill size={28} />
              <span>Chats</span>
            </Link>
          </li>
          <li>
            <Link
              className='flex items-center gap-2 text-green-500 font-semibold'
              href={LINKS.PROFILE}
              as={NextLink}
            >
              <Avatar src='https://i.pravatar.cc/150?u=a042581f4e29026024d' />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
