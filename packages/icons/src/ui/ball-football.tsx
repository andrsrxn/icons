import type { Icon } from './types'

export const IconBallFootball: Icon = ({
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
      data-slot='icon-ui-ball-football'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M4.39 4.67a4.03 4.03 0 1 0 6.98 4.03 4.03 4.03 0 0 0-6.98-4.03'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M12.66 4.67a4.03 4.03 0 1 0 6.98 4.03 4.03 4.03 0 0 0-6.98-4.03'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M14.86 12.56a4.03 4.03 0 1 0 6.98 4.04 4.03 4.03 0 0 0-6.98-4.04'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M2.4 12.56a4.03 4.03 0 1 0 7 4.04 4.03 4.03 0 0 0-7-4.04'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M9.07 17.23a3.4 3.4 0 1 0 5.88 3.39 3.4 3.4 0 0 0-5.88-3.4'
        fill='currentColor'
      />
      <path
        d='M3.07 6.85a10.3 10.3 0 0 0 3.78 14.08A10.31 10.31 0 1 0 3.07 6.85'
        stroke='currentColor'
      />
      <path d='m12 8.08-3.8 2.86 1.6 4.74h4.43l1.57-4.74z' stroke='currentColor' />
      <path d='m8.59 2.45 3.4 2.57 3.43-2.57' stroke='currentColor' />
      <path d='m1.8 12.77 3.37-2.62-1.6-3.97' stroke='currentColor' />
      <path d='m22.2 12.77-3.37-2.62 1.6-3.97' stroke='currentColor' />
      <path d='m3.87 18.12 4.32-.29 1.49 4.09' stroke='currentColor' />
      <path d='m20.13 18.2-4.25-.28-1.46 4.01' stroke='currentColor' />
      <path d='M12 8.1V5.22' stroke='currentColor' />
      <path d='m8.15 10.94-2.79-.75' stroke='currentColor' />
      <path d='m15.85 10.94 2.79-.75' stroke='currentColor' />
      <path d='m8.07 17.9 1.66-2.4' stroke='currentColor' />
      <path d='m15.92 17.9-1.63-2.4' stroke='currentColor' />
    </svg>
  )
}
