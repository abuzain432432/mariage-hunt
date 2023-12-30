'use client';
import Qa from '@/components/Qa/Qa';
import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Navbar } from '@/components/Qa/Navbar';

export default function Page() {
  const searchParams = useSearchParams();
  const [page, setPage] = useState(() => {});
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <Qa className='  flex-1' />
    </div>
  );
}
