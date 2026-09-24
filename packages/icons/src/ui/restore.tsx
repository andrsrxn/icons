import type { Icon } from './types'

export const IconRestore: Icon = ({
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
      data-slot='icon-ui-restore'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M3.51 7.93c3.12-4.1 6.2-4.87 8.67-4.87A9.08 9.08 0 1 1 5.82 18.6'
        stroke='currentColor'
      />
      <path d='M2.73 2.79V4.8c0 1.89 0 2.83.58 3.42s1.53.58 3.41.58h2.03' stroke='currentColor' />
    </svg>
  )
}
