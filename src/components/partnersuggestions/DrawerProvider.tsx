'use client';

import React, { ReactNode, useState } from 'react';
import PreferenceFilter from './PreferenceFilter';

export default function DrawerProvider({
  children,
}: {
  children: ReactNode;
}) {
  return <div className='w-screen overflow-x-hidden'>{children}</div>;
}
