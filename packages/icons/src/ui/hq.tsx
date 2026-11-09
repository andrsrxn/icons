import type { Icon } from './types'

export const IconHq: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-hq'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M21.53 20.54H2.47' stroke='currentColor' />
      <path d='M21.53 3.5H2.47' stroke='currentColor' />
      <path d='M9.15 7.01V17' stroke='currentColor' />
      <path d='M3.26 7.01V17' stroke='currentColor' />
      <path d='M3.26 12h5.89' stroke='currentColor' />
      <path d='M17 12.73 21.27 17' stroke='currentColor' />
      <path
        d='M20.58 11.9c0-2.7-1.87-4.89-4.18-4.89s-4.19 2.2-4.19 4.9 1.88 4.9 4.19 4.9a3.9 3.9 0 0 0 2.99-1.48 5.3 5.3 0 0 0 1.2-3.42'
        stroke='currentColor'
      />
    </svg>
  )
}
