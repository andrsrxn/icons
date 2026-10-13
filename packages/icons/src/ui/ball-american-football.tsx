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
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6.62 6.25a16.4 16.4 0 0 0-4.4 8.53l6.91 7.15a15.6 15.6 0 0 0 8.63-4.3 14.5 14.5 0 0 0 4.15-8.49l-7.66-7.22a15.7 15.7 0 0 0-7.63 4.33'
        fill='currentColor'
      />
      <path
        d='M6.12 6.12c-3.08 3.08-4.1 7.12-4.37 10.37-.18 2.24-.27 3.35 1.05 4.66 1.31 1.31 2.45 1.21 4.72 1.02 3.29-.29 7.39-1.31 10.36-4.29 2.98-2.97 4-7.07 4.29-10.36.2-2.27.3-3.4-1.02-4.72-1.3-1.32-2.42-1.23-4.66-1.05-3.25.27-7.3 1.3-10.37 4.37'
        stroke='currentColor'
      />
      <path d='m8.4 15.73 7.36-7.36' stroke='currentColor' />
      <path d='M11.7 15.82 8.18 12.3' stroke='currentColor' />
      <path d='m13.76 13.76-3.52-3.52' stroke='currentColor' />
      <path d='M15.82 11.7 12.3 8.18' stroke='currentColor' />
      <path d='m21.69 9.24-6.83-6.82' stroke='currentColor' />
      <path d='M9.14 21.81 2.32 15' stroke='currentColor' />
    </svg>
  )
}
