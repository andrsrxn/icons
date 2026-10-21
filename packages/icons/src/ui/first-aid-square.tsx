import type { Icon } from './types'

export const IconFirstAidSquare: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-first-aid-square'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M15.24 21.24c2.83 0 4.24 0 5.12-.88s.88-2.3.88-5.12V8.76c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88H8.76c-2.83 0-4.24 0-5.12.88s-.88 2.3-.88 5.12v6.48c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88zM12.28 6.08c1.03 0 1.89.82 1.94 1.85.05 1 .85 1.8 1.85 1.84 1.03.04 1.85.9 1.85 1.93v.35a2 2 0 0 1-1.85 2c-1 .08-1.8.9-1.85 1.91a2.06 2.06 0 0 1-2.04 1.96h-.22a2.2 2.2 0 0 1-2.19-1.94l-.02-.19a2 2 0 0 0-1.8-1.73A1.97 1.97 0 0 1 6.15 12l.01-.41c.05-1 .81-1.83 1.81-1.94.94-.1 1.68-.84 1.8-1.77.13-1.03 1-1.8 2.04-1.8z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M14.22 15.05v.89c0 .94 0 1.41-.3 1.7-.29.3-.76.3-1.7.3h-.45c-.94 0-1.4 0-1.7-.3-.3-.29-.3-.76-.3-1.7v-.89c0-.47 0-.7-.14-.85s-.38-.15-.86-.15h-.7c-.94 0-1.41 0-1.7-.29-.3-.3-.3-.76-.3-1.7v-.36c0-.95 0-1.42.3-1.71.29-.3.76-.3 1.7-.3h.7c.48 0 .71 0 .86-.14.14-.15.14-.38.14-.85v-.64c0-.94 0-1.41.3-1.7.29-.3.76-.3 1.7-.3h.45c.94 0 1.41 0 1.7.3.3.29.3.76.3 1.7v.64c0 .47 0 .7.14.85s.39.15.86.15h.7c.94 0 1.41 0 1.7.29.3.3.3.76.3 1.7v.36c0 .95 0 1.42-.3 1.71-.29.3-.76.3-1.7.3h-.7c-.47 0-.71 0-.86.14-.14.15-.14.38-.14.85'
        stroke='currentColor'
      />
      <path
        d='M21.38 15.38V8.62c0-2.83 0-4.25-.88-5.13s-2.3-.87-5.12-.87H8.61c-2.83 0-4.24 0-5.12.87-.88.88-.88 2.3-.88 5.13v6.76c0 2.83 0 4.25.88 5.13s2.3.87 5.12.87h6.77c2.83 0 4.24 0 5.12-.87.88-.88.88-2.3.88-5.13'
        stroke='currentColor'
      />
    </svg>
  )
}
