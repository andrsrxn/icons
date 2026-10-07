import type { Icon } from './types'

export const IconCopyControls: Icon = ({
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
      data-slot='icon-ui-copy-controls'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M22.24 7.92c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88h-5.52a3 3 0 0 0-2.8 3.3l.02.44a3 3 0 0 0 3 2.78l.91.07c.85.07 1.27.1 1.63.22a3 3 0 0 1 1.93 2.02c.1.36.11.78.14 1.63l.02.66.03.57a3 3 0 0 0 2.73 2.64l.57.01h.6a3 3 0 0 0 2.72-2.74c.02-.13.02-.28.02-.59z'
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
        d='M16.34 16.07c2.73 0 4.09 0 4.96-.82l.12-.12c.82-.86.82-2.23.82-4.95V7.73c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88h-2.49c-2.69 0-4.03 0-4.9.8l-.15.16c-.8.86-.8 2.2-.8 4.9'
        stroke='currentColor'
      />
      <circle
        opacity='.2'
        cx='7.49'
        cy='12.62'
        r='1.44'
        transform='rotate(90 7.49 12.62)'
        fill='currentColor'
      />
      <circle
        opacity='.2'
        cx='1.44'
        cy='1.44'
        r='1.44'
        transform='matrix(0 1 1 0 9.17 16.13)'
        fill='currentColor'
      />
      <path d='M13 12.62H8.91' stroke='currentColor' />
      <path d='M4.88 17.57h4.29' stroke='currentColor' />
      <path d='M6.05 12.62H4.88' stroke='currentColor' />
      <path d='M12.04 17.57H13' stroke='currentColor' />
      <circle
        cx='7.49'
        cy='12.62'
        r='1.44'
        transform='rotate(90 7.49 12.62)'
        stroke='currentColor'
      />
      <circle
        cx='1.44'
        cy='1.44'
        r='1.44'
        transform='matrix(0 1 1 0 9.17 16.13)'
        stroke='currentColor'
      />
    </svg>
  )
}
