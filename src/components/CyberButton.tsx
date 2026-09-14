import * as React from 'react';
import { cn } from '@/lib/utils';

const buttonClasses =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-border bg-secondary px-5 py-2.5 font-manrope text-sm font-semibold text-secondary-foreground transition-[background-color,border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transform-none disabled:pointer-events-none disabled:opacity-40';

type CyberButtonBaseProps = {
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
};

type CyberButtonAsButton = CyberButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type CyberButtonAsLink = CyberButtonBaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type CyberButtonProps = CyberButtonAsButton | CyberButtonAsLink;

export const CyberButton = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  CyberButtonProps
>(({ className, fullWidth = false, children, style, href, ...props }, ref) => {
  const classes = cn(buttonClasses, fullWidth && 'w-full', className);

  if (href) {
    const { ...linkProps } = props as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a ref={ref as React.Ref<HTMLAnchorElement>} href={href} className={classes} style={style} {...linkProps}>
        {children}
      </a>
    );
  }

  const { ...buttonProps } = props as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type="button"
      className={classes}
      style={style}
      {...buttonProps}
    >
      {children}
    </button>
  );
});

CyberButton.displayName = 'CyberButton';

export default CyberButton;
