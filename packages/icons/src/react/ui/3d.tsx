import type { Icon } from './types'

export const Icon3d: Icon = ({
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
      data-slot='icon-ui-3d'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M21.52 20.53H2.48' stroke='currentColor' />
      <path d='M21.52 3.5H2.48' stroke='currentColor' />
      <path
        d='M13.45 8.8v6.4c0 .82 0 1.23.31 1.52s.67.28 1.38.24c2-.1 5.03-.93 5.03-4.96s-3.04-4.86-5.03-4.96c-.71-.04-1.07-.06-1.38.23s-.31.71-.31 1.53'
        stroke='currentColor'
      />
      <path
        d='M4.52 8.13a3.6 3.6 0 0 1 2.83-1.2c2.56 0 3.31 2.94 2.03 4.13-1.28 1.18-3.16.91-3.16.91'
        stroke='currentColor'
      />
      <path
        d='M4.52 15.87a3.6 3.6 0 0 0 2.83 1.2c2.56 0 3.31-2.94 2.03-4.13-1.28-1.18-3.16-.91-3.16-.91'
        stroke='currentColor'
      />
    </svg>
  )
}
