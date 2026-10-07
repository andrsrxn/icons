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
        d='M3.07 6.84a10.31 10.31 0 1 0 17.86 10.31A10.31 10.31 0 0 0 3.07 6.85'
        fill='currentColor'
      />
      <path
        d='M3.07 6.85a10.3 10.3 0 0 0 3.78 14.08A10.31 10.31 0 1 0 3.07 6.85'
        stroke='currentColor'
      />
      <path d='M2.86 16.41s.46-.16 1.65-1.12' stroke='currentColor' />
      <path d='M12.75 22.12s-.1-.48.14-1.99' stroke='currentColor' />
      <path d='M11.25 1.88s.09.48-.14 1.99' stroke='currentColor' />
      <path d='M21.14 7.58s-.46.17-1.65 1.12' stroke='currentColor' />
      <path d='M9.65 8.83c.43-.73.75-1.49.98-2.19' stroke='currentColor' />
      <path d='M15.91 12.45c.42-.74.92-1.4 1.4-1.94' stroke='currentColor' />
      <path d='M8.12 11.48q-.68 1.14-1.46 2' stroke='currentColor' />
      <path d='M14.39 15.1a12 12 0 0 0-1.01 2.26' stroke='currentColor' />
    </svg>
  )
}
