import type { Icon } from './types'

export const IconBallBowling: Icon = ({
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
      data-slot='icon-ui-ball-bowling'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M1.69 12a10.31 10.31 0 1 0 20.62 0 10.31 10.31 0 0 0-20.62 0'
        fill='currentColor'
      />
      <path d='M1.7 12A10.3 10.3 0 0 0 12 22.31 10.31 10.31 0 1 0 1.7 12' stroke='currentColor' />
      <path
        d='M17.79 10.76a.74.74 0 1 1-1.11-.99.74.74 0 0 1 1.1 1'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M13.8 6.73a.74.74 0 1 1-1.1-.99.74.74 0 0 1 1.1.99'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M12.59 12.45a.74.74 0 1 1-1.11-.99.74.74 0 0 1 1.1 1'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
