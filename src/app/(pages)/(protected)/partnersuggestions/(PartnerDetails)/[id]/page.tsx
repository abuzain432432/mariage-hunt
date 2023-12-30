import PartnerDetails from '@/components/PartnerDetails/PartnerDetails';
import PartnerDetailsHeader from '@/components/PartnerDetails/PartnerDetailsHeader';
import ProtectedLayouNavbar from '@/components/ui/ProtectedLayouNavbar';
import React from 'react';

export default function page({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div className='bg-gray-100'>
      <ProtectedLayouNavbar className='max-w-6xl mx-auto ' />
      <PartnerDetailsHeader className='max-w-6xl mx-auto' />
      <PartnerDetails className='max-w-6xl mx-auto' />
    </div>
  );
}
