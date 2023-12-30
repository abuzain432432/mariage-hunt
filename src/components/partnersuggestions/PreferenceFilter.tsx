'use client';
import React, { useContext, useState } from 'react';
import { DrawerCtx } from './DrawerCtx';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { Button, CheckboxGroup, RadioGroup } from '@nextui-org/react';
import { CustomCheckbox } from './CustomCheckbox';
import { CustomRadio } from './CustomRadionBox';
const PreferenceFilter = () => {
  const { isOpen, onToggle } = useContext(DrawerCtx);
  const [lookingFor, setLookingFor] = useState('');
  const [ethnicity, setEthnicity] = useState<any>([]);
  const [children, setChildren] = useState('');

  const [maritalStatus, setMaritalStatus] = useState<any>([]);
  const [desiredRelationship, setDesiredRelationship] = useState<any>(
    []
  );
  const [willingToRelocate, setWillingToRelocate] = useState<any>([]);
  const [religion, setReligion] = useState('');
  const [education, setEducation] = useState('');
  const [bodyType, setBodyType] = useState('');
  const [exercise, setExercise] = useState('');
  const [drink, setDrink] = useState('');
  const [smoker, setSmoker] = useState('');

  return (
    <Drawer
      lockBackgroundScroll
      size={450}
      duration={150}
      direction='right'
      open={isOpen}
      onClose={onToggle}
    >
      <div className='h-screen pt-6 pb-20 relative px-8 overflow-y-auto'>
        <RadioGroup
          className='gap-1  border-b-2 py-3  border-b-gray-200'
          label={
            <span className='text-gray-700 text-lg font-semibold'>
              Gender
            </span>
          }
          orientation='horizontal'
          value={lookingFor}
          onChange={value => {
            setLookingFor(value.target.value);
          }}
        >
          <CustomRadio value='male'>A Husband</CustomRadio>
          <CustomRadio value='female'>A Wife</CustomRadio>
        </RadioGroup>
        <CheckboxGroup
          className='gap-1  border-b-2 py-3  border-b-gray-200'
          label={
            <span className='text-gray-700 text-lg font-semibold'>
              Ethnicity
            </span>
          }
          orientation='horizontal'
          value={ethnicity}
          onChange={setEthnicity}
        >
          <CustomCheckbox value='African American'>
            African American
          </CustomCheckbox>
          <CustomCheckbox value='Asian'>Asian</CustomCheckbox>
          <CustomCheckbox value='Black'>Black</CustomCheckbox>
          <CustomCheckbox value='Caucasian'>Caucasian</CustomCheckbox>
          <CustomCheckbox value='Indian'>Indian</CustomCheckbox>
          <CustomCheckbox value='Indigenous / Aboriginal'>
            Indigenous / Aboriginal
          </CustomCheckbox>
          <CustomCheckbox value='Latin / Hispanic'>
            Latin / Hispanic
          </CustomCheckbox>
          <CustomCheckbox value={'Middle Eastern'}>
            Middle Eastern
          </CustomCheckbox>
          <CustomCheckbox value={'Mixed'}>Mixed</CustomCheckbox>
          <CustomCheckbox value='Other'>Other</CustomCheckbox>
        </CheckboxGroup>
        <CheckboxGroup
          className='gap-1  border-b-2 py-3  border-b-gray-200'
          label={
            <span className='text-gray-700 text-lg font-semibold'>
              Marital Status
            </span>
          }
          orientation='horizontal'
          value={maritalStatus}
          onChange={setMaritalStatus}
        >
          <CustomCheckbox value='Single'>Single</CustomCheckbox>
          <CustomCheckbox value='Married'>Married</CustomCheckbox>
          <CustomCheckbox value='Separated'>Separated</CustomCheckbox>
          <CustomCheckbox value='Divorced'>Divorced</CustomCheckbox>
          <CustomCheckbox value='Widowed'>Widowed</CustomCheckbox>
        </CheckboxGroup>

        <RadioGroup
          className='gap-1  border-b-2 py-3  border-b-gray-200'
          label={
            <span className='text-gray-700 text-lg font-semibold'>
              Children
            </span>
          }
          orientation='horizontal'
          value={children}
          onChange={value => {
            setChildren(value.target.value);
          }}
        >
          <CustomRadio value="Don't want">
            Don&apos;t want
          </CustomRadio>
          <CustomRadio value='Want someday'>Want someday</CustomRadio>
          <CustomRadio value='Have & want more'>
            Have & want more
          </CustomRadio>
          <CustomRadio value="Have & don't want more">
            Have & don&apos;t want more
          </CustomRadio>
        </RadioGroup>
        <CheckboxGroup
          className='gap-1  border-b-2 py-3  border-b-gray-200'
          label={
            <span className='text-gray-700 text-lg font-semibold'>
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
        <CheckboxGroup
          className='gap-1  border-b-2 py-3  border-b-gray-200'
          label={
            <span className='text-gray-700 text-lg font-semibold'>
              Willing to relocate
            </span>
          }
          orientation='horizontal'
          value={willingToRelocate}
          onChange={setWillingToRelocate}
        >
          <CustomCheckbox value='Yes'>Yes</CustomCheckbox>
          <CustomCheckbox value='No'>No</CustomCheckbox>
          <CustomCheckbox value='Open'>Open</CustomCheckbox>
        </CheckboxGroup>
        <RadioGroup
          className='gap-1  border-b-2 py-3  border-b-gray-200'
          label={
            <span className='text-gray-700 text-lg font-semibold'>
              Religion
            </span>
          }
          orientation='horizontal'
          value={religion}
          onChange={value => {
            setReligion(value.target.value);
          }}
        >
          <CustomRadio value='Agnostic'>Agnostic</CustomRadio>
          <CustomRadio value='Atheist'>Atheist</CustomRadio>
          <CustomRadio value='Buddhist'>Buddhist</CustomRadio>
          <CustomRadio value='Christian'>Christian</CustomRadio>
          <CustomRadio value='Hindu'>Hindu</CustomRadio>
          <CustomRadio value='Hebrew Israelites'>
            Hebrew Israelites
          </CustomRadio>
          <CustomRadio value='Jewish'>Jewish</CustomRadio>
          <CustomRadio value='Muslim'>Muslim</CustomRadio>
          <CustomRadio value='Mormon'>Mormon</CustomRadio>
          <CustomRadio value='Spiritual'>Spiritual</CustomRadio>
          <CustomRadio value='Other'>Other</CustomRadio>
        </RadioGroup>
        <RadioGroup
          className='gap-1  border-b-2 py-3  border-b-gray-200'
          label={
            <span className='text-gray-700 text-lg font-semibold'>
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

        <RadioGroup
          className='gap-1  border-b-2 py-3  border-b-gray-200'
          label={
            <span className='text-gray-700 text-lg font-semibold'>
              Body Type
            </span>
          }
          orientation='horizontal'
          value={bodyType}
          onChange={value => setBodyType(value.target.value)}
        >
          <CustomRadio value='Average'>Average</CustomRadio>
          <CustomRadio value='Fit'>Fit</CustomRadio>
          <CustomRadio value='Curvy'>Curvy</CustomRadio>
          <CustomRadio value='Slim'>Slim</CustomRadio>
          <CustomRadio value='Chubby'>Chubby</CustomRadio>
        </RadioGroup>

        <RadioGroup
          className='gap-1  border-b-2 py-3  border-b-gray-200'
          label={
            <span className='text-gray-700 text-lg font-semibold'>
              Exercise
            </span>
          }
          orientation='horizontal'
          value={exercise}
          onChange={value => setExercise(value.target.value)}
        >
          <CustomRadio value='Never'>Never</CustomRadio>
          <CustomRadio value='Sometimes'>Sometimes</CustomRadio>
          <CustomRadio value='Often'>Often</CustomRadio>
        </RadioGroup>

        <RadioGroup
          className='gap-1  border-b-2 py-3  border-b-gray-200'
          label={
            <span className='text-gray-700 text-lg font-semibold'>
              Drink
            </span>
          }
          orientation='horizontal'
          value={drink}
          onChange={value => setDrink(value.target.value)}
        >
          <CustomRadio value='Never'>Never</CustomRadio>
          <CustomRadio value='Sometimes'>Sometimes</CustomRadio>
          <CustomRadio value='Socially'>Socially</CustomRadio>
          <CustomRadio value='Often'>Often</CustomRadio>
        </RadioGroup>

        <RadioGroup
          className='gap-1   py-3  '
          label={
            <span className='text-gray-700 text-lg font-semibold'>
              Smoke
            </span>
          }
          orientation='horizontal'
          value={smoker}
          onChange={value => setSmoker(value.target.value)}
        >
          <CustomRadio value='Never'>Never</CustomRadio>
          <CustomRadio value='Sometimes'>Sometimes</CustomRadio>
          <CustomRadio value='Socially'>Socially</CustomRadio>
          <CustomRadio value='Often'>Often</CustomRadio>
        </RadioGroup>
        <div className='fixed w-full left-0 shadow-lg flex justify-end gap-6 items-center px-8 bg-gray-100 bottom-0 py-4'>
          <button className='bg-green-500 text-white text-lg rounded-xl font-semibold text-center py-1 px-8'>
            Search
          </button>
        </div>
      </div>
    </Drawer>
  );
};

export default PreferenceFilter;
