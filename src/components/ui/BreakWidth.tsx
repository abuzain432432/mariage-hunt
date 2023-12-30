import cx from 'clsx';

import React, { ElementType, ReactNode } from 'react';

import styles from './BreakWidth.module.css';

export type BreakoutWidthProps = {
  as?: ElementType;
  disable?: boolean;
  children: ReactNode;
  className?: string;
};

export const BreakoutWidth = ({
  as: Container = 'div',
  disable,
  children,
  className,
}: BreakoutWidthProps) => {
  return (
    <Container
      className={cx(
        { [styles.breakoutContainer]: !disable },
        className
      )}
    >
      {children}
    </Container>
  );
};
