import type { Icon } from './types'

export const IconBallTennis: Icon = ({
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
      data-slot='icon-ui-ball-tennis'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M20.7 17.02c-1.94 3.34-5.1 5.6-6.42 4.83s-.3-4.25 1.62-7.6 4.43-5.94 5.76-5.18c1.32.77.96 4.6-.97 7.95'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M3.37 7c-1.93 3.34-2.3 7.2-.98 7.97 1.33.76 3.84-1.86 5.77-5.2 1.93-3.35 2.93-6.81 1.61-7.58C8.45 1.43 5.31 3.66 3.37 7'
        fill='currentColor'
      />
      <path
        d='M3.07 6.85a10.3 10.3 0 0 0 3.78 14.08A10.31 10.31 0 1 0 3.07 6.85'
        stroke='currentColor'
      />
      <path d='M2.25 15.18s3.74-1.1 6.15-5.26c2.4-4.17 1.48-7.96 1.48-7.96' stroke='currentColor' />
      <path
        d='M14.12 22.04s-.92-3.79 1.49-7.96c2.4-4.17 6.15-5.26 6.15-5.26'
        stroke='currentColor'
      />
    </svg>
  )
}
