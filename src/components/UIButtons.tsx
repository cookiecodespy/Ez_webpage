import React, { useState, useMemo } from 'react';
import { useReducedMotion } from 'framer-motion';

type ElementType = React.ElementType;

type PolymorphicProps<E extends ElementType> = {
  as?: E;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<E>, 'as' | 'className' | 'children'>;

type PrimaryButtonProps<E extends ElementType = 'button'> = PolymorphicProps<E> & {
  disabled?: boolean;
};

type OutlineButtonProps<E extends ElementType = 'button'> = PolymorphicProps<E>;

type SubmitButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
  isSuccess?: boolean;
};

type SocialIconButtonProps<E extends ElementType = 'a'> = PolymorphicProps<E>;

const mergeClassName = (base: string, additional?: string) =>
  additional ? `${base} ${additional}`.trim() : base;

export const PrimaryButton = <E extends ElementType = 'button'>({
  as,
  className = '',
  children,
  disabled,
  ...props
}: PrimaryButtonProps<E>) => {
  const Component = (as ?? 'button') as ElementType;
  const prefersReducedMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const transformStyle = useMemo(() => {
    if (prefersReducedMotion) {
      return undefined;
    }

    const scale = hovered ? 1.02 : 1;
    return `translate(${offset.x}px, ${offset.y}px) scale(${scale})`;
  }, [hovered, offset.x, offset.y, prefersReducedMotion]);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    if (prefersReducedMotion) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const relativeX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 8;
    const relativeY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 8;

    setOffset({ x: relativeX, y: relativeY });
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setOffset({ x: 0, y: 0 });
  };

  return (
    <Component
      className={mergeClassName(
  'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 font-semibold text-white shadow-lg transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E41B13]/60',
        className
      )}
      style={{
        backgroundImage: 'linear-gradient(135deg, #E41B13 0%, #c21807 100%)',
        backgroundSize: '200% 200%',
        backgroundPosition: hovered ? '100% 50%' : '0% 50%',
        transform: transformStyle,
        transition: prefersReducedMotion
          ? undefined
          : 'background-position 0.6s ease, transform 0.2s ease',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      disabled={disabled}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      <span
        className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-20"
        aria-hidden="true"
      />
      {!prefersReducedMotion && (
        <span className="absolute inset-0 animate-shine rounded-full" aria-hidden="true" />
      )}
    </Component>
  );
};

export const OutlineButton = <E extends ElementType = 'button'>({
  as,
  className = '',
  children,
  ...props
}: OutlineButtonProps<E>) => {
  const Component = (as ?? 'button') as ElementType;

  return (
    <Component
      className={mergeClassName(
  'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-[#E41B13] px-6 py-3 font-semibold text-[#E41B13] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E41B13]/60',
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
        {children}
      </span>
      <span
        className="absolute inset-0 scale-0 transform rounded-full bg-[#E41B13] transition-transform duration-300 group-hover:scale-100"
        aria-hidden="true"
      />
    </Component>
  );
};

export const SubmitButton = React.forwardRef<HTMLButtonElement, SubmitButtonProps>(
  ({ className = '', children, isLoading, isSuccess, disabled, ...props }, ref) => (
    <button
      ref={ref}
      className={mergeClassName(
  'relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-[#E41B13] px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E41B13]/60 disabled:cursor-not-allowed disabled:opacity-70',
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      <span className={`flex items-center gap-2 transition-opacity duration-300 ${isLoading || isSuccess ? 'opacity-0' : 'opacity-100'}`}>
        {children}
      </span>
      {isLoading && (
        <span className="absolute inline-flex items-center gap-2 text-sm font-medium">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" aria-hidden="true" />
          Enviando...
        </span>
      )}
      {isSuccess && (
        <span className="absolute inline-flex items-center gap-2 text-sm font-medium">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white" aria-hidden="true">
            ✔
          </span>
          Enviado
        </span>
      )}
    </button>
  )
);
SubmitButton.displayName = 'SubmitButton';

export const SocialIconButton = <E extends ElementType = 'a'>({
  as,
  className = '',
  children,
  ...props
}: SocialIconButtonProps<E>) => {
  const Component = (as ?? 'a') as ElementType;

  return (
    <Component
      className={mergeClassName(
  'relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-[#E41B13] text-white shadow-lg transition-all duration-300 hover:shadow-[0_0_12px_rgba(228,27,19,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E41B13]/60',
        className
      )}
      {...props}
    >
      <span className="absolute inset-0 animate-[pulseGlow_3s_ease-in-out_infinite] opacity-0" aria-hidden="true" />
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>
    </Component>
  );
};
