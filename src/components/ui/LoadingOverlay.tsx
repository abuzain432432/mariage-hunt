import { Spinner } from '@nextui-org/react';
import React from 'react'

export default function LoadingOverlay({isActive}:{isActive:boolean}) {
  if(!isActive) return
  return (
    <div className='bg-[#ebeadc7a] z-10 rounded-xl w-full h-full left-0 top-0 absolute inset-1 flex justify-center items-center' >

    <Spinner size='lg' color='success'/>
  </div>
  )
}
