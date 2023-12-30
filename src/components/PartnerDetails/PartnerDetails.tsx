import clsx from 'clsx';
import React from 'react';
import { PiTrainRegionalLight } from 'react-icons/pi';
import { GiDoubleRingedOrb } from 'react-icons/gi';
import { GiGreenPower } from 'react-icons/gi';
import { MdSchool } from 'react-icons/md';
import { ImLocation } from 'react-icons/im';
import { IoBodySharp } from 'react-icons/io5';
import { FaGlassWater } from 'react-icons/fa6';
import { TbCirclesRelation } from 'react-icons/tb';
import { MdOutlineSmokeFree } from 'react-icons/md';
import { GiBodyHeight } from 'react-icons/gi';
import { BiBody } from 'react-icons/bi';
import { TbMoodSearch } from 'react-icons/tb';
import { FaChildren } from 'react-icons/fa6';
import { PiGenderTransgenderBold } from 'react-icons/pi';
export default function PartnerDetails({
  className,
}: {
  className: string;
}) {
  return (
    <section
      className={clsx(
        className,
        'bg-white p-6 border border-gray-300 grid gap-6 grid-cols-3 rounded-3xl translate-y-[-50px]'
      )}
    >
      <div className='col-span-2'>
        <div>
          <h3 className='text-green-900 font-extrabold text-3xl my-3 px-2'>
            Basic Info
          </h3>
          <ul className='border-[6px] flex flex-col w-full gap-3  rounded-3xl py-4 px-14 border-gray-200'>
            <li className='flex w-full border-b justify-between border-b-gray-300 py-2'>
              <p className='flex gap-2 items-center'>
                <PiGenderTransgenderBold
                  className='text-gray-600'
                  size={24}
                />
                <span className='text-gray-500 font-semibold'>
                  Age
                </span>
              </p>
              <p className='text-gray-600 font-semibold'>18</p>
            </li>
            <li className='flex w-full border-b justify-between border-b-gray-300 py-2'>
              <p className='flex gap-2 items-center'>
                <PiGenderTransgenderBold
                  className='text-gray-600'
                  size={24}
                />
                <span className='text-gray-500 font-semibold'>
                  Gender
                </span>
              </p>
              <p className='text-gray-600 font-semibold'>Male</p>
            </li>
            <li className='flex w-full border-b border-b-gray-300 py-2 justify-between'>
              <p className='flex gap-2 items-center'>
                <PiTrainRegionalLight
                  className='text-gray-600'
                  size={24}
                />
                <span className='text-gray-500 font-semibold'>
                  Ethnicity
                </span>
              </p>
              <p className='text-gray-600 font-semibold'>Asian</p>
            </li>
            <li className='flex w-full border-b justify-between border-b-gray-300 py-2'>
              <p className='flex gap-2 items-center'>
                <GiDoubleRingedOrb
                  className='text-gray-600'
                  size={24}
                />
                <span className='text-gray-500 font-semibold'>
                  Marital Status
                </span>
              </p>
              <p className='text-gray-600 font-semibold'>Single</p>
            </li>

            <li className='flex w-full border-b justify-between border-b-gray-300 py-2'>
              <p className='flex gap-2 items-center'>
                <GiGreenPower className='text-gray-600' size={24} />
                <span className='text-gray-500 font-semibold'>
                  Religion
                </span>
              </p>
              <p className='text-gray-600 font-semibold'>Agnostic</p>
            </li>
          </ul>
        </div>

        <div>
          <h3 className='text-green-900 font-extrabold text-3xl mt-6 mb-3 px-2'>
            Personal Info
          </h3>
          <ul className='border-[6px] flex flex-col w-full gap-3  rounded-3xl py-4 px-14 border-gray-200'>
            <li className='flex w-full border-b justify-between border-b-gray-300 py-2'>
              <p className='flex gap-2 items-center'>
                <MdSchool className='text-gray-600' size={24} />
                <span className='text-gray-500 font-semibold'>
                  Education
                </span>
              </p>
              <p className='text-gray-600 font-semibold'>
                High school
              </p>
            </li>

            <li className='flex w-full border-b justify-between border-b-gray-300 py-2'>
              <p className='flex gap-2 items-center'>
                <ImLocation className='text-gray-600' size={24} />
                <span className='text-gray-500 font-semibold'>
                  Willing to relocate
                </span>
              </p>
              <p className='text-gray-600 font-semibold'>Yes</p>
            </li>

            <li className='flex w-full border-b justify-between border-b-gray-300 py-2'>
              <p className='flex gap-2 items-center'>
                <TbMoodSearch className='text-gray-600' size={24} />
                <span className='text-gray-500 font-semibold'>
                  Looking for
                </span>
              </p>
              <p className='text-gray-600 font-semibold'>A Husband</p>
            </li>

            <li className='flex w-full border-b justify-between border-b-gray-300 py-2'>
              <p className='flex gap-2 items-center'>
                <FaChildren className='text-gray-600' size={24} />
                <span className='text-gray-500 font-semibold'>
                  Children
                </span>
              </p>
              <p className='text-gray-600 font-semibold'>Only 1</p>
            </li>

            <li className='flex w-full border-b justify-between border-b-gray-300 py-2'>
              <p className='flex gap-2 items-center'>
                <TbCirclesRelation
                  className='text-gray-600'
                  size={24}
                />
                <span className='text-gray-500 font-semibold'>
                  Desired Relationship
                </span>
              </p>
              <p className='text-gray-600 font-semibold'>
                Monogamy,Polygyny
              </p>
            </li>
          </ul>
        </div>

        <div>
          <h3 className='text-green-900 font-extrabold text-3xl mt-6 mb-3 px-2'>
            Habits
          </h3>
          <ul className='border-[6px] flex flex-col w-full gap-3  rounded-3xl py-4 px-14 border-gray-200'>
            <li className='flex w-full border-b justify-between border-b-gray-300 py-2'>
              <p className='flex gap-2 items-center'>
                <IoBodySharp className='text-gray-600' size={24} />
                <span className='text-gray-500 font-semibold'>
                  Exercise
                </span>
              </p>
              <p className='text-gray-600 font-semibold'>Neve</p>
            </li>

            <li className='flex w-full border-b justify-between border-b-gray-300 py-2'>
              <p className='flex gap-2 items-center'>
                <FaGlassWater className='text-gray-600' size={24} />
                <span className='text-gray-500 font-semibold'>
                  Drink
                </span>
              </p>
              <p className='text-gray-600 font-semibold'>Neve</p>
            </li>

            <li className='flex w-full border-b justify-between border-b-gray-300 py-2'>
              <p className='flex gap-2 items-center'>
                <MdOutlineSmokeFree
                  className='text-gray-600'
                  size={24}
                />
                <span className='text-gray-500 font-semibold'>
                  Smoker
                </span>
              </p>
              <p className='text-gray-600 font-semibold'>Neve</p>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className='text-green-900 font-extrabold text-3xl my-3 px-2'>
          Appearance
        </h3>

        <ul className='border-[6px] flex flex-col w-full gap-3  rounded-3xl py-4 border-gray-200'>
          <li className='flex w-full  gap-4 items-center  px-6 py-2'>
            <GiBodyHeight className='text-gray-600' size={74} />
            <div>
              <p className='flex gap-2 items-center'>
                <span className='text-gray-500 font-semibold'>
                  Height
                </span>
              </p>
              <p className='text-gray-600 font-semibold'>
                Min 6 - Max 7
              </p>
            </div>
          </li>

          <li className='flex w-full  gap-4 items-center  px-6 py-2'>
            <BiBody className='text-gray-600' size={74} />
            <div>
              <p className='flex gap-2 items-center'>
                <span className='text-gray-500 font-semibold'>
                  Body Type
                </span>
              </p>
              <p className='text-gray-600 font-semibold'>Average</p>
            </div>
          </li>
        </ul>

        <h3 className='text-green-900 font-extrabold text-3xl mt-6 mb-3 px-2'>
          Ideal partner
        </h3>

        <ul className='border-[6px] grid grid-cols-2 gap-3 w-full  rounded-3xl py-4 border-gray-200'>
          <li className='flex w-full  items-center gap-2  px-3 py-2'>
            <TbMoodSearch className='text-gray-600' size={34} />
            <div>
              <p className='flex gap-2 items-center text-sm'>
                <span className='text-gray-500 font-semibold'>
                  Looking for
                </span>
              </p>
              <p className='text-gray-600 font-semibold'>A Husband</p>
            </div>
          </li>
          <li className='flex w-full   items-center gap-2  px-3 py-2'>
            <PiTrainRegionalLight
              className='text-gray-600'
              size={34}
            />
            <div>
              <p className='flex items-center text-sm'>
                <span className='text-gray-500 font-semibold'>
                  Ethnicity
                </span>
              </p>
              <p className='text-gray-600 font-semibold'>Only 1</p>
            </div>
          </li>
          <li className='flex w-full   items-center gap-2  px-3 py-2'>
            <FaChildren className='text-gray-600' size={40} />
            <div>
              <p className='flex items-center text-sm'>
                <span className='text-gray-500 font-semibold'>
                  Children
                </span>
              </p>
              <p className='text-gray-600 font-semibold'>Only 1</p>
            </div>
          </li>
          <li className='flex w-full   items-center gap-2  px-3 py-2'>
            <MdSchool className='text-gray-600' size={40} />
            <div>
              <p className='flex items-center text-sm'>
                <span className='text-gray-500 font-semibold'>
                  Education
                </span>
              </p>
              <p className='text-gray-600 font-semibold'>
                High school
              </p>
            </div>
          </li>
          <li className='flex w-full   items-center gap-2  px-3 py-2'>
            <GiDoubleRingedOrb className='text-gray-600' size={40} />
            <div>
              <p className='flex items-center text-sm'>
                <span className='text-gray-500 font-semibold'>
                  Marital Status
                </span>
              </p>
              <p className='text-gray-600 font-semibold'>
                High school
              </p>
            </div>
          </li>
          <li className='flex w-full   items-center gap-2  px-3 py-2'>
            <BiBody className='text-gray-600' size={40} />
            <div>
              <p className='flex items-center text-sm'>
                <span className='text-gray-500 font-semibold'>
                  Body Type
                </span>
              </p>
              <p className='text-gray-600 font-semibold'>Average</p>
            </div>
          </li>
          <li className='flex w-full   items-center gap-2  px-3 py-2'>
            <FaGlassWater className='text-gray-600' size={36} />
            <div>
              <p className='flex items-center text-sm'>
                <span className='text-gray-500 font-semibold'>
                  Drink
                </span>
              </p>
              <p className='text-gray-600 font-semibold'>Never</p>
            </div>
          </li>
          <li className='flex w-full   items-center gap-2  px-3 py-2'>
            <MdOutlineSmokeFree className='text-gray-600' size={40} />
            <div>
              <p className='flex items-center text-sm'>
                <span className='text-gray-500 font-semibold'>
                  Smoker
                </span>
              </p>
              <p className='text-gray-600 font-semibold'>Never</p>
            </div>
          </li>
          <li className='flex w-full   items-center gap-2  px-3 py-2'>
            <IoBodySharp className='text-gray-600' size={40} />
            <div>
              <p className='flex items-center text-sm'>
                <span className='text-gray-500 font-semibold'>
                  Exercise
                </span>
              </p>
              <p className='text-gray-600 font-semibold'>Never</p>
            </div>
          </li>
          <li className='flex w-full   items-center gap-2  px-3 py-2'>
            <GiGreenPower className='text-gray-600' size={40} />
            <div>
              <p className='flex items-center text-sm'>
                <span className='text-gray-500 font-semibold'>
                  religion
                </span>
              </p>
              <p className='text-gray-600 font-semibold'>Never</p>
            </div>
          </li>
          <li className='flex w-full   items-center gap-2  px-3 py-2'>
            <ImLocation className='text-gray-600' size={40} />
            <div>
              <p className='flex items-center text-sm'>
                <span className='text-gray-500 font-semibold'>
                  Willing to relocate
                </span>
              </p>
              <p className='text-gray-600 font-semibold'>Never</p>
            </div>
          </li>
          <li className='flex w-full   items-center gap-2  px-3 py-2'>
            <TbCirclesRelation className='text-gray-600' size={40} />
            <div>
              <p className='flex items-center text-sm'>
                <span className='text-gray-500 font-semibold'>
                  Desired Relationship
                </span>
              </p>
              <p className='text-gray-600 font-semibold'>Never</p>
            </div>
          </li>
          <li className='flex w-full   items-center gap-2  px-3 py-2'>
            <GiGreenPower className='text-gray-600' size={40} />
            <div>
              <p className='flex items-center text-sm'>
                <span className='text-gray-500 font-semibold'>
                  religion
                </span>
              </p>
              <p className='text-gray-600 font-semibold'>Never</p>
            </div>
          </li>
          <li className='flex w-full   items-center gap-2  px-3 py-2'>
            <GiBodyHeight className='text-gray-600' size={40} />
            <div>
              <p className='flex items-center text-sm'>
                <span className='text-gray-500 font-semibold'>
                  Min 6 - Max 7
                </span>
              </p>
              <p className='text-gray-600 font-semibold'>Never</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
