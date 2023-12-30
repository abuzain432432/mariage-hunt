'use client';
import clsx from 'clsx';
import React from 'react';
import { usePathname } from 'next/navigation';
import { LINKS } from '@/util';
import Link from 'next/link';
export default function DividerNavbar({
  className,
}: {
  className: string;
}) {
  const pathname = usePathname();
  console.log(pathname);
  const isSuggestedTabActive = pathname.endsWith(
    LINKS.PARTNER_SUGGESTION
  );
  const isNearMeTabActive = pathname.endsWith(LINKS.NEAR_ME);
  const isFavoritesTabActive = pathname.endsWith(LINKS.FAVORITES);
  const isVisitorsToMyProfileTabActive = pathname.endsWith(
    LINKS.VISTTORS_TO_MY_PROVIFILE
  );
  const isVisitedProfileTabActive = pathname.endsWith(
    LINKS.VISITED_PROFILES
  );
  return (
    <div className='bg-white  border-b-1  border-gray-100'>
      <div className={clsx(className, ' flex')}>
        <div
          className={`flex-1 flex justify-center font-semibold items-center ${
            isSuggestedTabActive &&
            'text-green-600 border-b-2 border-b-green-500'
          } py-2 border-r-[1.5px] duration-150 cursor-pointer  hover:border-b-2 hover:text-green-600  hover:border-b-green-500 border-r-gray-200`}
        >
          <Link href={LINKS.PARTNER_SUGGESTION}>Suggested</Link>
        </div>
        <div
          className={`flex-1 flex justify-center font-semibold items-center ${
            isNearMeTabActive &&
            'text-green-600 border-b-2 border-b-green-500'
          } hover:text-green-600 text-gray-500 py-2 border-r-[1.5px] duration-150 cursor-pointer  hover:border-b-2  hover:border-b-green-500 border-r-gray-200`}
        >
          <Link href={LINKS.NEAR_ME}>Near me</Link>
        </div>
        <div
          className={`flex-1 flex justify-center font-semibold items-center ${
            isFavoritesTabActive &&
            'text-green-600 border-b-2 border-b-green-500'
          } hover:text-green-600 text-gray-500 py-2 border-r-[1.5px] duration-150 cursor-pointer  hover:border-b-2  hover:border-b-green-500 border-r-gray-200`}
        >
          <Link href={LINKS.FAVORITES}>Favorites</Link>
        </div>
        <div
          className={`flex-1 flex justify-center font-semibold ${
            isVisitorsToMyProfileTabActive &&
            'text-green-600 border-b-2 border-b-green-500'
          } items-center text-gray-500 py-2 border-r-[1.5px] duration-150 cursor-pointer  hover:border-b-2  hover:border-b-green-500 hover:text-green-600 border-r-gray-200`}
        >
          <Link href={LINKS.VISTTORS_TO_MY_PROVIFILE}>
            Visitors to my profile
          </Link>
        </div>
        <div
          className={`flex-1 flex justify-center ${
            isVisitedProfileTabActive &&
            'text-green-600 border-b-2 border-b-green-500'
          } font-semibold items-center text-gray-500 py-2 border-r-[1.5px] duration-150 cursor-pointer  hover:border-b-2  hover:border-b-green-500 hover:text-green-600 border-r-gray-200`}
        >
          <Link href={LINKS.VISITED_PROFILES}>
            Profiles I have visited
          </Link>
        </div>
      </div>
    </div>
  );
}
