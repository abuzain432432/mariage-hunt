import React from 'react';

export default function NextSlideBtn({
  onClick,
}: {
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className='px-8 py-1 hover:bg-green-600 duration-200 mt-5 hover:border-white/50 text-white  w-fit border-1.5 bg-green-500 ml-auto rounded-full text-lg font-semibold border-white'
    >
      Next
    </div>
  );
}
