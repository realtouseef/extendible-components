import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '../utils';

const buttonVariants = cva('active:scale-95 rounded-full text-3xl', {
  variants: {
    variant: {
      default: 'bg-emerald-400 hover:bg-emerald-500 text-white',
      secondary: 'bg-emerald-200 hover:bg-emerald-300 text-black',
      outline: 'border-2 border-emerald-500 hover:bg-emerald-50 text-black',
    },
    size: {
      default: 'px-6 py-3',
      sm: 'px-3 py-2',
      lg: 'px-10 py-3',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  size,
  variant,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(buttonVariants({ className, size, variant }))}
    />
  );
};
