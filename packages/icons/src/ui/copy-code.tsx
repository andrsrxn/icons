import type { Icon } from './types'

export const IconCopyCode: Icon = ({
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
      data-slot='icon-ui-copy-code'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M22.24 7.92c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88h-5.45a3 3 0 0 0-2.86 2.9v.62a3 3 0 0 0 3.11 2.83l.82.02c.87.02 1.3.03 1.67.13a3 3 0 0 1 2.02 1.9c.13.35.17.78.24 1.64l.13 1.42.03.27a3 3 0 0 0 3.12 2.61h.3a3 3 0 0 0 2.86-2.87z'
        fill='currentColor'
      />
      <rect
        width='14.34'
        height='14.34'
        rx='3'
        transform='matrix(1 0 0 -1 1.76 22.27)'
        stroke='currentColor'
      />
      <path
        d='M7.9 7.59c0-2.7 0-4.04.8-4.9l.15-.16c.87-.8 2.21-.8 4.9-.8h2.49c2.82 0 4.24 0 5.12.88s.88 2.3.88 5.12v2.45c0 2.72 0 4.09-.82 4.95l-.12.12c-.87.82-2.23.82-4.96.82'
        stroke='currentColor'
      />
      <path
        d='m10.86 17.73.51-.5c1-1 1.5-1.5 1.5-2.13s-.5-1.12-1.5-2.12l-.5-.51'
        stroke='currentColor'
      />
      <path
        d='m7 17.73-.5-.5c-1-1-1.5-1.5-1.5-2.13s.5-1.12 1.5-2.12l.5-.51'
        stroke='currentColor'
      />
    </svg>
  )
}
