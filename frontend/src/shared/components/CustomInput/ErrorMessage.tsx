interface Props {
  message?: string;
}

export function CustomInputErrorMessage({ message }: Props) {
  if (!message) {
    return null;
  }

  return (
    <small className="text-sm text-red-600 font-medium italic">{message}</small>
  );
}
