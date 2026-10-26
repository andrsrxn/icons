import type { Icon } from './types'

export const IconFaceScan: Icon = ({
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
      data-slot='icon-ui-face-scan'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M8.75 2.76c-2.83 0-4.24 0-5.12.88s-.88 2.3-.88 5.12v6.48c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88h6.48c2.83 0 4.24 0 5.12-.88s.88-2.3.88-5.12V8.76c0-2.83 0-4.24-.88-5.12s-2.29-.88-5.12-.88z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M15.93 21.32c2.27 0 3.4 0 4.2-.57a3 3 0 0 0 .64-.65c.58-.8.58-1.93.58-4.2'
        stroke='currentColor'
      />
      <path
        d='M15.97 2.71c2.23 0 3.35 0 4.13.56a3 3 0 0 1 .69.69c.56.78.56 1.9.56 4.14'
        stroke='currentColor'
      />
      <path
        d='M8.07 21.32c-2.27 0-3.4 0-4.2-.58a3 3 0 0 1-.64-.64c-.58-.8-.58-1.93-.58-4.2'
        stroke='currentColor'
      />
      <path
        d='M8.07 2.71c-2.27 0-3.4 0-4.2.58a3 3 0 0 0-.64.65c-.58.79-.58 1.92-.58 4.2'
        stroke='currentColor'
      />
      <path
        d='M9.56 9.29a.88.88 0 1 1-1.77 0 .88.88 0 0 1 1.77 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M16.01 9.29a.88.88 0 1 1-1.77 0 .88.88 0 0 1 1.77 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path d='M16.01 15c-.89.88-2.28 1.43-4.1 1.43A6.2 6.2 0 0 1 7.78 15' stroke='currentColor' />
    </svg>
  )
}
