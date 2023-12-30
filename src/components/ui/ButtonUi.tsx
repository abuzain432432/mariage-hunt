'use client';

import { ReactNode } from 'react';
import {
  Button as NextUIButton,
  Link as NextUiLink,
} from '@nextui-org/react';
import cx from 'clsx';
import Link from 'next/link';

export type ButtonThemes =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger';

export type ButtonVarients =
  | 'solid'
  | 'bordered'
  | 'light'
  | 'flat'
  | 'faded'
  | 'shadow'
  | 'ghost';

export type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  style?: Record<string, unknown>;
  theme?: ButtonThemes;
  size?: 'md' | 'lg' | 'sm';
  onClick?: (...args: any) => any;
  label?: string;
  variant?: ButtonVarients;
  href?: string;
};

export const ButtonUi = ({
  theme = 'default',
  size = 'md',
  type = 'button',
  label,
  disabled,
  loading,
  children,
  onClick = () => {},
  className,
  style,
  variant,
  href,
}: ButtonProps) => {
  const containerClasses = cx(className);
  if (href) {
    return (
      <NextUiLink href={href} as={Link}>
        <NextUIButton
          variant={variant}
          color={theme}
          size={size}
          onClick={onClick}
          aria-label={label}
          disabled={disabled || loading}
          type={type}
          className={containerClasses}
          style={style}
          isLoading={loading}
        >
          {children}
        </NextUIButton>
      </NextUiLink>
    );
  }

  return (
    <NextUIButton
      variant={variant}
      color={theme}
      size={size}
      onClick={onClick}
      aria-label={label}
      disabled={disabled || loading}
      type={type}
      className={containerClasses}
      style={style}
      isLoading={loading}
    >
      {children}
    </NextUIButton>
  );
};
