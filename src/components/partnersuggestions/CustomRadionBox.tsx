import React from 'react';
import {
  useRadio,
  Chip,
  VisuallyHidden,
  tv,
} from '@nextui-org/react';
import { FaCheck } from 'react-icons/fa6';

const radio = tv({
  slots: {
    base: 'border-default-100 hover:bg-default-200',
    content: 'text-default-500',
  },
  variants: {
    isSelected: {
      true: {
        base: 'border-green-1 bg-green-500 hover:bg-green-500 hover:border-green-500',
        content: 'text-primary-foreground pl-1',
      },
    },
    isFocusVisible: {
      true: {
        base: 'outline-none ring-2 ring-focus ring-offset-2 ring-offset-background',
      },
    },
  },
});

export const CustomRadio = (props: any) => {
  const {
    children,
    isSelected,
    isFocusVisible,
    getBaseProps,
    getLabelProps,
    getInputProps,
  } = useRadio({
    ...props,
  });

  const styles = radio({ isSelected, isFocusVisible });

  return (
    <label {...getBaseProps()}>
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <Chip
        classNames={{
          base: styles.base(),
          content: styles.content(),
        }}
        color='primary'
        startContent={
          isSelected ? <FaCheck className='ml-1 text-white' /> : null
        }
        variant='faded'
        {...getLabelProps()}
      >
        {children ? children : isSelected ? 'Enabled' : 'Disabled'}
      </Chip>
    </label>
  );
};
