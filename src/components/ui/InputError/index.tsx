import { ErrorMessage } from '@hookform/error-message';
import { FieldErrors } from 'react-hook-form';

export type InputErrorProps = {
  inputName: string;
  errors: FieldErrors;
  className?: string;
};

export const InputError = ({
  errors,
  inputName,
  className,
}: InputErrorProps) => {
  const message = (errors[inputName]?.message as string) || '';

  return (
    message && (
      <div
        className={`${className} text-red-400 font-light text-sm pt-1`}
      >
        <p>{message}</p>
      </div>
    )
  );
};
