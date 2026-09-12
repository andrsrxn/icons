import type { Icon } from './types'

export const IconHotAirBalloon: Icon = ({
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
      data-slot='icon-ui-hot-air-balloon'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M9.32 9.51c0 3.83 1.66 8.27 1.66 8.27-3.24 0-5.9-4.44-5.9-8.27s3.43-7.8 5.9-7.8c0 0-1.66 3.98-1.66 7.8'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M14.47 9.51c0 3.83-1.66 8.27-1.66 8.27 3.24 0 5.9-4.44 5.9-8.27s-3.43-7.8-5.9-7.8c0 0 1.66 3.98 1.66 7.8'
        fill='currentColor'
      />
      <path
        d='M18.99 9.51c0 3.83-3.13 8.72-6.99 8.72s-6.99-4.9-6.99-8.72S8.14 1.72 12 1.72s6.99 3.97 6.99 7.8'
        stroke='currentColor'
      />
      <rect x='8.29' y='18.36' width='7.42' height='3.93' rx='1' stroke='currentColor' />
      <ellipse cx='12' cy='9.75' rx='2.5' ry='8.03' stroke='currentColor' />
    </svg>
  )
}
