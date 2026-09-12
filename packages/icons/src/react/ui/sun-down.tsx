import type { Icon } from './types'

export const IconSunDown: Icon = ({
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
      data-slot='icon-ui-sun-down'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M11.97 18.52H6.26c0-3.33 2.56-6.03 5.71-6.03s5.71 2.7 5.71 6.03z'
        fill='currentColor'
      />
      <path d='M1.57 18.53h20.86' stroke='currentColor' />
      <path d='M6.26 18.2a5.71 5.71 0 1 1 11.42 0' stroke='currentColor' />
      <path d='m17.18 10.35 1.59-1.58' stroke='currentColor' />
      <path d='m20.27 14.6 2.16-.58' stroke='currentColor' />
      <path d='m3.73 14.6-2.16-.58' stroke='currentColor' />
      <path d='M6.82 10.35 5.25 8.78' stroke='currentColor' />
      <path
        d='m9.53 6.66.32.31c1 1 1.5 1.5 2.12 1.5s1.12-.5 2.12-1.5l.32-.3'
        stroke='currentColor'
      />
      <path d='M11.97 3.11v5' stroke='currentColor' />
    </svg>
  )
}
