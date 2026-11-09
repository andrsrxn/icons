import type { Icon } from './types'

export const IconSlidesEnd: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-slides-end'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M16.23 20.43c2.83 0 4.24 0 5.12-.88s.88-2.29.88-5.12V9.57c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88h-1.2c-2.83 0-4.25 0-5.13.88s-.87 2.29-.87 5.12v4.86c0 2.83 0 4.24.87 5.12.88.88 2.3.88 5.13.88z'
        fill='currentColor'
      />
      <path
        d='M9.03 14.43V9.57c0-2.83 0-4.24.87-5.12.88-.88 2.3-.88 5.13-.88h1.2c2.83 0 4.24 0 5.12.88s.88 2.29.88 5.12v4.86c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88h-1.2c-2.83 0-4.25 0-5.13-.88s-.87-2.29-.87-5.12'
        stroke='currentColor'
      />
      <path d='M1.72 18.66V5.34' stroke='currentColor' />
      <path d='M5.61 18.66V5.34' stroke='currentColor' />
    </svg>
  )
}
