import type { Icon } from './types'

export const IconBallBaseball: Icon = ({
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
      data-slot='icon-ui-ball-baseball'
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
      <path d='M6.29 20.4s.31-.38.87-1.8' stroke='currentColor' />
      <path d='M17.7 20.4s-.31-.38-.87-1.8' stroke='currentColor' />
      <path d='M6.29 3.6s.31.38.87 1.8' stroke='currentColor' />
      <path d='M17.7 3.6s-.31.38-.87 1.8' stroke='currentColor' />
      <path d='M8.38 10.43q-.01-1.29-.25-2.38' stroke='currentColor' />
      <path d='M15.61 10.43q.01-1.29.25-2.38' stroke='currentColor' />
      <path d='M8.37 13.49q-.01 1.32-.25 2.46' stroke='currentColor' />
      <path d='M15.62 13.49q.01 1.32.25 2.46' stroke='currentColor' />
    </svg>
  )
}
