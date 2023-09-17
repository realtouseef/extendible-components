import { HTMLAttributes } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '../utils';

const headingVariant = cva('font-bold', {
  variants: {
    size: {
      default: 'text-4xl',
      h2: 'text-3xl',
      h3: 'text-2xl',
      h4: 'text-xl',
      h5: 'text-lg',
      h6: 'text-sm',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariant> {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const Heading: React.FC<HeadingProps> = ({
  type: Element = 'h1',
  size,
  className,
  ...props
}) => {
  return (
    <Element className={cn(headingVariant({ size, className }))} {...props} />
  );
};
