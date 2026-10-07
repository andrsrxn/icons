import type { Icon } from './types'

export const IconBallAmericanFootball: Icon = ({
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
      data-slot='icon-ui-ball-american-football'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M6.62 6.25C1.63 11.23 1.3 18.69 2.45 21.56c3.13 1.12 10.33 1.06 15.31-3.93s4.71-11.62 3.66-15.08C17.85.76 11.6 1.26 6.62 6.25'
        fill='currentColor'
      />
      <path
        d='M6.12 6.12c-3.08 3.08-4.1 7.12-4.37 10.37-.18 2.24-.27 3.35 1.05 4.66 1.31 1.31 2.45 1.21 4.72 1.02 3.29-.29 7.39-1.31 10.36-4.29 2.98-2.97 4-7.07 4.29-10.36.2-2.27.3-3.4-1.02-4.72-1.3-1.32-2.42-1.23-4.66-1.05-3.25.27-7.3 1.3-10.37 4.37'
        stroke='currentColor'
      />
      <path d='m3 21.14 18.08-18.1' stroke='currentColor' />
      <path d='m12 16.07-3.94-3.94' stroke='currentColor' />
      <path d='M15.95 12.13 12 8.18' stroke='currentColor' />
    </svg>
  )
}
