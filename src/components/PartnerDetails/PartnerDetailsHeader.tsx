import clsx from 'clsx';
import React from 'react';
import PartnerDetailsHeaderOverlay from './PartnerDetailsHeaderOverlay';
import PartnerDetailsHeaderImage from './PartnerDetailsHeaderImage';
import PartnerDetailsHeaderPersonalInfo from './PartnerDetailsHeaderPersonalInfo';
export default function PartnerDetailsHeader({
  className,
}: {
  className: string;
}) {
  return (
    <div className='min-h-[35vh] overflow-hidden relative'>
      <PartnerDetailsHeaderOverlay />
      <div
        className='pt-12 pb-28 px-6 min-h-full'
        style={{ backdropFilter: 'blur(50px)' }}
      >
        <div className={clsx(className, 'flex gap-6 h-full w-full')}>
          <PartnerDetailsHeaderImage />
          <PartnerDetailsHeaderPersonalInfo />
        </div>
      </div>
    </div>
  );
}
