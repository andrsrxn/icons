import type { Icon } from './types'

export const IconCopy: Icon = ({
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
      data-slot='icon-ui-copy'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M22.24 7.92c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88H10.8A3 3 0 0 0 7.93 5.1v.26a3 3 0 0 0 3.14 2.85h.79c.78 0 1.16 0 1.5.08a3 3 0 0 1 2.14 1.88c.12.32.17.7.27 1.48l.24 1.89.03.2a3 3 0 0 0 3.07 2.52h.22a3 3 0 0 0 2.9-2.9V7.92'
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
    </svg>
  )
}
