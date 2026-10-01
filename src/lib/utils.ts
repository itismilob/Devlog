import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function mergeClassNames(...inputs: Parameters<typeof clsx>) {
  return twMerge(clsx(inputs));
}
