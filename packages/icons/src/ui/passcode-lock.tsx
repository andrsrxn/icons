import type { Icon } from './types'

export const IconPasscodeLock: Icon = ({
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
      data-slot='icon-ui-passcode-lock'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M15.36 15.54h6.95V9.79c0-1.89 0-2.83-.59-3.42s-1.53-.58-3.41-.58H5.69c-1.88 0-2.82 0-3.41.58-.59.59-.59 1.53-.59 3.42v4.42c0 1.89 0 2.83.59 3.42s1.53.58 3.41.58h9.67z'
        fill='currentColor'
      />
      <path
        d='M11.49 18.21h-3.8c-2.82 0-4.24 0-5.12-.88s-.88-2.29-.88-5.12v-.42c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88h10.6c.94 0 1.41 0 1.8.1A3 3 0 0 1 22.2 8c.1.39.1.86.1 1.8'
        stroke='currentColor'
      />
      <path
        d='M6.96 12a.66.66 0 1 1-1.32 0 .66.66 0 0 1 1.32 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M12.62 12a.66.66 0 1 1-1.32 0 .66.66 0 0 1 1.32 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <rect x='15.6' y='15.34' width='6.7' height='5' rx='1' stroke='currentColor' />
      <path d='m20.84 15.34-.16-1.4a1.7 1.7 0 0 0-3.4-.02l-.18 1.42' stroke='currentColor' />
    </svg>
  )
}
