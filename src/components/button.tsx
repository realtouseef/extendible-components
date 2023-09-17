import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '../utils';

const buttonVariants = cva(
  'active:scale-95 inline-flex items-center rounded-full text-3xl focus:ring focus:ring-purple-300 focus:outline-none focus:ring-offset-4',
  {
    variants: {
      variant: {
        default: 'bg-purple-400 hover:bg-purple-500 text-white',
        secondary: 'bg-purple-200 hover:bg-purple-300 text-purple-800',
        outline:
          'border-2 border-purple-500 hover:bg-purple-50  text-purple-800',
        ghost: 'hover:bg-purple-200 text-purple-800',
      },
      size: {
        default: 'px-6 py-3',
        sm: 'px-4 py-2 text-2xl',
        lg: 'px-12 py-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button: React.FC<ButtonProps> = ({
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

export { buttonVariants, Button };
