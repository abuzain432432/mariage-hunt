import PrimaryHeading from '@/components/ui/PrimaryHeading';
import React from 'react';
import styles from './HeroSection.module.css';
import cx from 'clsx';
import { ButtonUi } from '@/components/ui/ButtonUi';
import Logo from '@/components/ui/Logo';

export default function HeroSection() {
  return (
    <div
      className={cx(
        styles.heroSectionContainer,
        'flex-1 w-11/12 mx-auto rounded-3xl z-20'
      )}
    >
      <div className='max-w-7xl mx-auto h-full flex w-full items-center '>
        <div>
          <div className='mb-8'>
            <PrimaryHeading className='text-white moveInLeftAnimation mt-2 mb-2 leading-[1.1] font-semibold tracking-wide'>
              <span className='clip-border bg-green-500 px-8 heading-clippath py-1'>
                Marriage
              </span>
              <br />
              is the goal
            </PrimaryHeading>
            <PrimaryHeading
              className='text-white moveInRightAnimation mt-2 font-light '
              level={2}
            >
              Sign up now to find yourself
              <br />a husband or a wife
            </PrimaryHeading>
          </div>
          <ButtonUi
            className='rounded-full moveInButtonAnimation text-black text-lg '
            size='lg'
            variant='solid'
            theme='success'
          >
            Start Now &rarr;
          </ButtonUi>
        </div>
      </div>
    </div>
  );
}
