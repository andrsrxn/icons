import type { Icon } from './types'

export const IconBallBasketball: Icon = ({
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
      data-slot='icon-ui-ball-basketball'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M3.07 6.84c-2.15 3.72-2.35 7.99-.7 8.95 1.67.95 4.56-1.76 6.7-5.48 2.15-3.71 2.97-7.45 1.3-8.41-1.65-.96-5.16 1.23-7.3 4.94'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M20.5 17c-2.14 3.7-5.6 6.1-7.13 5.22-1.52-.88-.54-4.7 1.6-8.42s4.9-6.34 6.43-5.46c1.53.89 1.25 4.94-.9 8.65'
        fill='currentColor'
      />
      <path
        d='M3.07 6.85a10.3 10.3 0 0 0 3.78 14.08A10.31 10.31 0 1 0 3.07 6.85'
        stroke='currentColor'
      />
      <path
        d='M12.95 22.24s-.05-4.57 2.18-8.43c2.23-3.87 6.21-6.1 6.21-6.1'
        stroke='currentColor'
      />
      <path d='M2.62 8.2s5.46-.07 10.07 2.6 7.29 7.41 7.29 7.41' stroke='currentColor' />
      <path d='M2.65 16.3s3.98-2.24 6.22-6.1c2.23-3.88 2.17-8.44 2.17-8.44' stroke='currentColor' />
    </svg>
  )
}
