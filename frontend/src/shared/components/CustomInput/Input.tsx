import React, { ForwardRefRenderFunction } from 'react';
import { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type: HTMLInputTypeAttribute;
  isRequired?: boolean;
  hasError?: boolean;
  disabled: boolean;
  placeholder?: string;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { id, type, placeholder, isRequired, hasError, disabled, ...rest },
  ref,
) => {
  function handleColorByError(): string {
    if (hasError) {
      return 'ring-red-300 focus:ring-red-600 bg-red-100 placeholder:text-red-600';
    }

    return 'ring-gray-300 focus:ring-indigo-600 placeholder:text-gray-400 dark:bg-slate-500 dark:disabled:placeholder:text-slate-400';
  }

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <input
      {...rest}
      id={id}
      type={type}
      autoComplete={type}
      placeholder={placeholder && placeholder}
      required={isRequired && isRequired}
      className={twMerge(
        'block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 disabled:bg-slate-200 dark:disabled:bg-slate-700 disabled:cursor-not-allowed',
        handleColorByError(),
        rest.className ? rest.className : '',
      )}
      disabled={disabled}
      ref={ref}
    />
  );
};

export const CustomInputInput = React.forwardRef(Input);
