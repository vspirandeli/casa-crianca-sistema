import { LabelHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  hasError: boolean;
  isLoading?: boolean;
}

export function CustomInputLabel({
  children,
  hasError,
  isLoading,
  ...rest
}: Props) {
  function handleColorByError(): string {
    if (hasError) {
      return 'text-red-600 dark:text-red-400';
    }

    return 'text-gray-900 dark:text-gray-100 dark:aria-disabled:text-gray-400';
  }

  return (
    <label
      {...rest}
      className={twMerge(
        'text-sm font-medium leading-6 aria-disabled:text-gray-400 aria-disabled:cursor-not-allowed',
        handleColorByError(),
        isLoading ? 'flex items-center' : 'block',
        rest.className,
      )}
      aria-disabled={isLoading}
    >
      {children}
    </label>
  );
}
