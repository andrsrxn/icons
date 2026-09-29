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
        d='M3.07 6.84a10.31 10.31 0 1 0 17.86 10.31A10.31 10.31 0 0 0 3.07 6.85'
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
