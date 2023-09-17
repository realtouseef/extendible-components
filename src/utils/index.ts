import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const chunk = <T>(array: T[], size: number = 2): T[][] => {
  if (!Array.isArray(array) || !array.length) return [];
  const result = [];
  let index = 0;

  while (index < array.length) {
    result.push(array.slice(index, (index += size)));
  }

  return result;
};
