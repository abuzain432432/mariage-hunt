import DividerNavbar from '@/components/ui/DividerNavbar';
import DrawerCtxProvider from '@/components/partnersuggestions/DrawerCtx';
import PreferenceFilter from '@/components/partnersuggestions/PreferenceFilter';
import ProtectedLayouNavbar from '@/components/ui/ProtectedLayouNavbar';
import React from 'react';

export default function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DrawerCtxProvider>
      <ProtectedLayouNavbar className='max-w-5xl mx-auto' />
      <DividerNavbar className='max-w-5xl mx-auto' />
      <main className='flex-1'>{children}</main>
      <PreferenceFilter />
    </DrawerCtxProvider>
  );
}
