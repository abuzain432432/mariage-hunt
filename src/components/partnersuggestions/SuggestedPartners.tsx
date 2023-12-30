import React from 'react';
import clsx from 'clsx';
import { SUGGESTED_PARTNERS_PAGE_HEIGHT } from '@/constants/tailwind';
import ForYouHeaderAndFilterHeader from './ForYouHeaderAndFilterHeader';
import PartnerList from '../ui/PartnerList';
export default function SuggestedPartners({
  className,
}: {
  className?: string;
}) {
  return (
    <>
      <div className='pb-4  bg-gray-100'></div>
      <section
        className={`bg-gray-100 ${SUGGESTED_PARTNERS_PAGE_HEIGHT}`}
      >
        <div className={clsx(className, 'bg-white py-6 px-8')}>
          <ForYouHeaderAndFilterHeader />
          <PartnerList  showFavoriteIcon={true} />
          <div className='mt-8  text-center'>
            <button className='px-4 py-2 text-gray-500 border-2 border-gray-200 rounded-full'>
              Discover more members
            </button>
          </div>
        </div>
      </section>
      <div className='pb-12  bg-gray-100'></div>
    </>
  );
}
