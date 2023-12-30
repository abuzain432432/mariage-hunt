'use client';
import { CheckboxGroup, RadioGroup } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { CustomRadio } from '../partnersuggestions/CustomRadionBox';
import { CustomCheckbox } from '../partnersuggestions/CustomCheckbox';
import NextSlideBtn from './NextSlideBtn';

export default function Slide2({
  handleNextSlidClick,
  setProgress,
}: {
  handleNextSlidClick: () => void;
  setProgress: (a: number) => void;
}) {
  const [children, setChildren] = useState('');
  const [education, setEducation] = useState('');
  const [desiredRelationship, setDesiredRelationship] = useState<any>(
    []
  );
  const [willingToRelocate, setWillingToRelocate] = useState('');

  return (
    <div
      style={{ justifyContent: 'start' }}
      className='keen-slider__slide number-slide2 relative items-start justify-start flex flex-col'
    >
      <RadioGroup
        className='gap-1 py-3 w-full border-b border-b-gray-300'
        label={
          <span className='text-gray-700 text-3xl  font-semibold'>
            Children
          </span>
        }
        orientation='horizontal'
        value={children}
        onChange={value => {
          setChildren(value.target.value);
        }}
      >
        <CustomRadio value="Don't want">Don&apos;t want</CustomRadio>
        <CustomRadio value='Want someday'>Want someday</CustomRadio>
        <CustomRadio value='Have & want more'>
          Have & want more
        </CustomRadio>
        <CustomRadio value="Have & don't want more">
          Have & don&apos;t want more
        </CustomRadio>
      </RadioGroup>
      <RadioGroup
        className='gap-1 py-3 w-full border-b border-b-gray-300'
        label={
          <span className='text-gray-700 text-3xl  font-semibold'>
            Education
          </span>
        }
        orientation='horizontal'
        value={education}
        onChange={value => setEducation(value.target.value)}
      >
        <CustomRadio value='High school'>High school</CustomRadio>
        <CustomRadio value='Some college'>Some college</CustomRadio>
        <CustomRadio value='Some university'>
          Some university
        </CustomRadio>
        <CustomRadio value="Associate's degree">
          Associate&apos;s degree
        </CustomRadio>
        <CustomRadio value="Bachelor's degree">
          Bachelor&apos;s degree
        </CustomRadio>
        <CustomRadio value="Master's degree">
          Master&apos;s degree
        </CustomRadio>
        <CustomRadio value='Graduate degree'>
          Graduate degree
        </CustomRadio>
      </RadioGroup>

      <CheckboxGroup
        className='gap-1 py-3 w-full border-b mt-5 border-b-gray-300'
        label={
          <span className='text-gray-700 text-3xl  font-semibold'>
            Desired Relationship
          </span>
        }
        orientation='horizontal'
        value={desiredRelationship}
        onChange={setDesiredRelationship}
      >
        <CustomCheckbox value='Monogamy'>Monogamy</CustomCheckbox>
        <CustomCheckbox value='Polygyny'>Polygyny</CustomCheckbox>
        <CustomCheckbox value='Open'>Open</CustomCheckbox>
      </CheckboxGroup>

      <RadioGroup
        className='gap-1 py-3 w-full border-b  border-b-gray-300'
        label={
          <span className='text-gray-700 text-3xl  font-semibold'>
            Willing to relocate
          </span>
        }
        orientation='horizontal'
        value={willingToRelocate}
        onChange={value => {
          setWillingToRelocate(value.target.value);
        }}
      >
        <CustomRadio value='Yes'>Yes</CustomRadio>
        <CustomRadio value='No'>No</CustomRadio>
        <CustomRadio value='Open'>Open</CustomRadio>
      </RadioGroup>
      <NextSlideBtn
        onClick={() => {
          setProgress(50);
          handleNextSlidClick();
        }}
      />
    </div>
  );
}
