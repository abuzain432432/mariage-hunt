import cx from 'clsx';

import Image, { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

import styles from '@/components/ui/HeroImage.module.css';

export type HeroImageProps = {
  imgSrc: string | StaticImageData;
  imgAlt: string;
  children?: ReactNode;
  className?: string;
};

export const HeroImage = ({
  imgSrc,
  imgAlt,
  children = null,
  className,
}: HeroImageProps) => {
  // console.log(first);
  return (
    <div className={cx(styles.container, className)}>
      <Image
        src={imgSrc}
        alt={imgAlt}
        fill
        quality={100}
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        objectFit='cover'
      />
      {children}
    </div>
  );
};
