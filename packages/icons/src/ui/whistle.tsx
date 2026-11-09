import type { Icon } from './types'

export const IconWhistle: Icon = ({
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
      data-slot='icon-ui-whistle'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M16.18 12.5a7.25 7.25 0 1 1-7.25-7.25c1.57 0 11.66-.4 12.85.45.75.54.2 6.26.2 6.26z'
        fill='currentColor'
      />
      <path d='M16.18 12.5a7.25 7.25 0 1 1-7.25-7.25' stroke='currentColor' />
      <path
        d='M8.89 5.25h9.75a6 6 0 0 1 1.98.16c.69.25 1.23.8 1.48 1.48.16.42.16.94.16 1.98s0 1.56-.16 1.98a2.5 2.5 0 0 1-1.48 1.49c-.42.15-.94.15-1.98.15h0-2.46'
        stroke='currentColor'
      />
      <path d='M9.1 5.31v4.92' stroke='currentColor' />
    </svg>
  )
}
