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
      {isLoading ? (
        <svg
          className="animate-spin h-4 w-4 ml-3 text-gray-100"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="opacity-25 text-indigo-700"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="#93c5fd"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962
          7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : null}
    </label>
  );
}
