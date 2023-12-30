import Image from 'next/image';
import React from 'react';
import img from '@/assets/women.webp';
import { AiOutlineMessage } from 'react-icons/ai';
import { GrStreetView } from 'react-icons/gr';
import styles from './SuggestedPartnerCard.module.css';
export default function SuggestedPartnerCard() {
  return (
    <figure
      className={`relative rounded-3xl bg-gray-100 cursor-pointer  overflow-hidden ${styles.card}`}
    >
      <figcaption className='px-5 pb-5 pt-1'>
        <div className='flex justify-center w-full'>
          <div className='w-[250px] h-[250px] relative mx-auto inline-block overflow-hidden rounded-full'>
            <Image
              fill
              sizes='300px'
              src={img}
              alt='profile-sample4'
              className={'h-full w-full'}
            />
          </div>
        </div>
        <div className='flex justify-between items-center'>
          <div>
            <h3 className='text-gray-600 font-bold mt-2 text-lg'>
              <span>Umer, </span>
            </h3>
            <div className='flex items-center gap-2'>
              <p className='text-gray-400 -mt-1 text-medium'>
                <span>Pakistan, </span>
                <span>Lahor</span>
              </p>
              <p className='text-gray-400 mb-1'>|</p>
              <p className='text-gray-400 -mt-1 text-medium'>
                <span>Age, </span>
                <span>18</span>
              </p>
            </div>
          </div>
        </div>
        <p className='text-gray-700'>
          {'I&lsquo;m looking for something that can deliver a 50-pound  payload of snow on a small feminine target. Can you suggest something? Hello...'.slice(
            0,
            60
          )}
          ...
        </p>
        <div className='flex gap-4 w-full justify-between mt-4'>
          <button
            className={`text-green-600 cursor-pointer ${styles.messageBtn} flex-1 flex justify-center gap-1 items-center border-1 border-green-600 rounded-lg  py-1 px-4`}
          >
            <AiOutlineMessage />
            <span>Message</span>
          </button>
          <button className='px-4 py-1 cursor-pointer rounded-lg flex flex-1 justify-center gap-1 items-center bg-green-600 text-white'>
            <GrStreetView /> <span>Profile</span>
          </button>
        </div>
      </figcaption>
    </figure>
  );
}
