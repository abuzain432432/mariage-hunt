import React, { ReactNode } from 'react';

export default function OutlinedButton({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <button className='px-4 py-2 border border-gray-500'>
      {children}
    </button>
  );
}
