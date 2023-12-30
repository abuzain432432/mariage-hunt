import React, { ReactNode } from 'react';
import cx from 'clsx';
interface PrimaryHeadingProps {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5;
  className?: string;
}
export default function PrimaryHeading({
  children,
  level = 1,
  className = '',
}: PrimaryHeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const headingClasses = cx(
    '',
    level === 1 && 'text-7xl my-8 font-extrabold ',
    level === 2 && 'text-4xl my-6',
    level === 3 && 'text-3xl my-4',
    level !== 1 && level !== 2 && level !== 3 && 'text-lg my-2',
    className
  );
  return <Tag className={headingClasses}>{children}</Tag>;
}
