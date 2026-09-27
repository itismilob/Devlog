'use client';

import { mergeClassNames } from '@/lib/utils';

interface ButtonProps {
  label?: string;
  onClick: () => void;
  className?: string;
  children?: React.ReactNode;
}

export default function Button({
  label,
  onClick,
  className,
  children,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={mergeClassNames(
        'px-4 py-2 text-white rounded bg-blue-500  hover:bg-black focus:bg-red-500 active:bg-green-500',
        className,
      )}
    >
      <div>{label}</div>
      <div>{children}</div>
    </button>
  );
}
