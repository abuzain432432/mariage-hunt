'use client';
import { Input, RadioGroup, Textarea } from '@nextui-org/react';
import { CustomRadio } from '../partnersuggestions/CustomRadionBox';
import { useEffect, useState } from 'react';
import AllowLocationModal from './AllowLocationModal';
import NextSlideBtn from './NextSlideBtn';

export default function Slide1({
  handleNextSlidClick,
  setProgress,
}: {
  handleNextSlidClick: () => void;
  setProgress: (a: number) => void;
}) {
  const [maritalStatus, setMaritalStatus] = useState('');
  const [gender, setGender] = useState('');
  const [isLocationPermissionDenied, setIsLocationPermissionDenied] =
    useState(false);
  const [userLocation, setUserLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [bio, setBio] = useState('');

  const handleAllowLocationClick = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        () => {
          setIsLocationPermissionDenied(true);
        }
      );
    }
    // else {
    //   console.error('Geolocation is not supported by your browser');
    // }
  };
  return (
    <div className='keen-slider__slide relative number-slide1 items-start justify-start flex flex-col'>
      <div className='w-full '>
        <span className='text-gray-700 text-3xl  font-semibold'>
          Age
        </span>
        <Input
          type='number'
          className='bg-[#EBEADC] focus-visible:border focus-visible:border-green-400 rounded-lg'
          labelPlacement='outside'
        />
      </div>
      <div className='w-full'>
        <span className='text-gray-700 text-3xl  font-semibold'>
          Bio
        </span>
        <Textarea
          className='bg-[#EBEADC] focus-visible:border focus-visible:border-green-400 rounded-lg'
          maxLength={500}
          minRows={7}
          labelPlacement='outside'
        />
      </div>

      <div className='w-full'>
        <span className='text-gray-700 text-3xl  font-semibold'>
          Location
        </span>
        <div
          onClick={handleAllowLocationClick}
          className='bg-gray-100 h-[40px] cursor-pointer text-base font-normal w-full focus-visible:border text-gray-600 flex justify-center items-center  hover:bg-gray-200 focus-visible:border-green-400 rounded-xl  text-center'
        >
          Allow
        </div>
      </div>
      <RadioGroup
        className='gap-1 py-3 w-full border-b border-b-gray-300'
        label={
          <span className='text-gray-700 text-3xl  font-semibold'>
            Marital Status
          </span>
        }
        orientation='horizontal'
        value={maritalStatus}
        onChange={value => {
          setMaritalStatus(value.target.value);
        }}
      >
        <CustomRadio value='Single'>Single</CustomRadio>
        <CustomRadio value='Married'>Married</CustomRadio>
        <CustomRadio value='Separated'>Separated</CustomRadio>
        <CustomRadio value='Divorced'>Divorced</CustomRadio>
        <CustomRadio value='Widowed'>Widowed</CustomRadio>
      </RadioGroup>
      <RadioGroup
        className='gap-1 border-b border-b-gray-300  py-3 w-full '
        label={
          <span className='text-gray-700 text-3xl  font-semibold'>
            Gender
          </span>
        }
        orientation='horizontal'
        value={gender}
        onChange={value => {
          setGender(value.target.value);
        }}
      >
        <CustomRadio value='male'>Male</CustomRadio>
        <CustomRadio value='female'>Female</CustomRadio>
      </RadioGroup>
      <NextSlideBtn
        onClick={() => {
          setProgress(25);
          handleNextSlidClick();
        }}
      />

      <AllowLocationModal isActive={isLocationPermissionDenied} />
    </div>
  );
}
