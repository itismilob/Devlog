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
        `px-4 py-2 
        text-gray-500 border rounded-xl
        bg-white border-gray-200
        hover:bg-gray-100
        focus:bg-gray-100 focus:border-gray-300
        active:bg-gray-200`,
        className,
      )}
    >
      <div>{label}</div>
      <div>{children}</div>
    </button>
  );
}
