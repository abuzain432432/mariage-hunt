import { SUGGESTED_PARTNERS_PAGE_HEIGHT } from '@/constants/tailwind';
import clsx from 'clsx';
import Header from '@/components/favorites/Header';
import PartnerList from '@/components/ui/PartnerList';
import React from 'react';

export default function Favorites({
  className,
}: {
  className: string;
}) {
  return (
    <>
      <div className='pb-4  bg-gray-100'></div>
      <section
        className={`bg-gray-100 ${SUGGESTED_PARTNERS_PAGE_HEIGHT}`}
      >
        <div className={clsx(className, 'bg-white py-6 px-8')}>
          <Header />
          <PartnerList showFavoriteIcon={true}/>
        </div>
      </section>
      <div className='pb-12  bg-gray-100'></div>
    </>
  );
}
