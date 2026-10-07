import type { Icon } from './types'

export const IconBallBilliard: Icon = ({
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
      data-slot='icon-ui-ball-billiard'
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
        d='M11.99 12.06s-2.6 1.64-2.6 3.23c0 1.28 1.13 2.18 2.45 2.25 1.4.08 2.78-.92 2.78-2.3 0-2.33-5.22-3.98-5.22-6.39 0-1.35 1.21-2.28 2.59-2.28s2.6.98 2.6 2.32c0 1.66-2.6 3.17-2.6 3.17'
        stroke='currentColor'
      />
    </svg>
  )
}
