import { ElementType, ObjectHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends ObjectHTMLAttributes<HTMLElement> {
  icon: ElementType;
  position: 'right' | 'left';
  hasError: boolean;
  isLoading: boolean;
  action?: () => void;
}

export function CustomInputIcon({
  icon: Icon,
  position,
  hasError,
  isLoading,
  action,
  ...rest
}: Props) {
  function handleColorByError(): string {
    if (hasError) {
      return 'text-red-600';
    }

    return 'text-gray-400 dark:text-white dark:disabled:text-gray-500';
  }

  function handlePosition(): string {
    if (position === 'left') {
      return 'left-0 ml-3';
    }

    return 'right-2';
  }

  return (
    <div
      {...rest}
      className={twMerge(
        'absolute inset-y-0 flex items-center z-5',
        handlePosition(),
        rest.className,
      )}
      onClick={action && action}
    >
      <Icon
        className={`h-5 w-5 ${handleColorByError()}`}
        aria-hidden="true"
        disabled={isLoading}
      />
    </div>
  );
}
