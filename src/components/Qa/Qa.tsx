'use client';
import React, { useState } from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import clsx from 'clsx';
import './BasicQaSlider.css';
import { Progress } from '@nextui-org/react';
import Slide1 from './Slide1';
import QaIntro from './QaIntro';
import NextSlideBtn from './NextSlideBtn';
import Slide2 from './Slide2';
import Slide3 from './Slide3';

export default function BasicQaSlider({
  className,
}: {
  className: string;
}) {
  const [progress, setProgress] = useState(0);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: false,
    drag: false,
  });

  const handleNextSlidClick = () => {
    if (slider.current) slider.current.next();
  };

  return (
    <section className={clsx(className, '')}>
      <QaIntro />
      <div className='max-w-2xl mx-auto mt-8 pb-8'>
        <Progress
          color='default'
          classNames={{
            indicator: 'bg-success/100',
            value: 'bg-white/100',
          }}
          aria-label='Loading...'
          value={progress}
        />
        <div
          ref={sliderRef}
          className={clsx('keen-slider', 'relative')}
        >
          <Slide1
            setProgress={setProgress}
            handleNextSlidClick={handleNextSlidClick}
          />
          <Slide3
            setProgress={setProgress}
            handleNextSlidClick={handleNextSlidClick}
          />
          <Slide2
            setProgress={setProgress}
            handleNextSlidClick={handleNextSlidClick}
          />
        </div>
      </div>
    </section>
  );
}
