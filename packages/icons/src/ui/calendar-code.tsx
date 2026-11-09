import type { Icon } from './types'

export const IconCalendarCode: Icon = ({
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
      data-slot='icon-ui-calendar-code'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='m3 7.66.01-.36a4 4 0 0 1 3.84-3.84h10.28a4 4 0 0 1 3.85 4.2v.09a1 1 0 0 1-.96.96H3.96a1 1 0 0 1-.95-.96z'
        fill='currentColor'
      />
      <path
        d='M20.98 12.44v-.98c0-3.77 0-5.66-1.17-6.83s-3.06-1.17-6.83-1.17H11c-3.77 0-5.66 0-6.83 1.17S3 7.7 3 11.46v2.02c0 3.72 0 5.58 1.14 6.75l.06.06c1.16 1.14 3.02 1.14 6.75 1.14'
        stroke='currentColor'
      />
      <path d='M7.68 1.76v3.4' stroke='currentColor' />
      <path d='M16.36 1.76v3.4' stroke='currentColor' />
      <path d='M20.56 8.7H3.83' stroke='currentColor' />
      <path
        d='m20.11 21.43.73-.72c1-1 1.5-1.5 1.5-2.12s-.5-1.13-1.5-2.13l-.73-.72'
        stroke='currentColor'
      />
      <path
        d='m15.94 21.43-.72-.72c-1-1-1.5-1.5-1.5-2.12s.5-1.13 1.5-2.13l.72-.72'
        stroke='currentColor'
      />
    </svg>
  )
}
