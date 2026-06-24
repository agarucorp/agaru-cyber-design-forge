import * as React from 'react';
import { cn } from '@/lib/utils';

const BUTTON_CLIP =
  'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)';

const buttonClasses =
  'group relative inline-flex items-center justify-center border border-white/60 bg-white/[0.04] px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-white transition-[border-color,background-color,box-shadow,color] duration-300 hover:border-white hover:bg-white/[0.08] hover:text-white hover:shadow-[0_0_24px_rgba(185,131,255,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B983FF]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-white/60 disabled:hover:bg-white/[0.04] disabled:hover:text-white disabled:hover:shadow-none';

const HoverLine = () => (
  <span
    aria-hidden
    className="pointer-events-none absolute left-0 top-0 h-[2px] w-0 bg-white transition-[width] duration-300 group-hover:w-full group-disabled:w-0 group-hover:shadow-[0_0_8px_rgba(255,255,255,0.8)]"
  />
);

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
  const clipStyle = { clipPath: BUTTON_CLIP, ...style };

  if (href) {
    const { ...linkProps } = props as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a ref={ref as React.Ref<HTMLAnchorElement>} href={href} className={classes} style={clipStyle} {...linkProps}>
        <HoverLine />
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
      style={clipStyle}
      {...buttonProps}
    >
      <HoverLine />
      {children}
    </button>
  );
});

CyberButton.displayName = 'CyberButton';

export default CyberButton;
