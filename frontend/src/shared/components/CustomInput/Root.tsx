import { ObjectHTMLAttributes } from 'react';

interface Props extends ObjectHTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function CustomInputRoot({ children, ...rest }: Props) {
  return (
    <div {...rest} className={rest.className}>
      {children}
    </div>
  );
}
