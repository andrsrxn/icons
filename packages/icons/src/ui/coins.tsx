import type { Icon } from './types'

export const IconCoins: Icon = ({
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
      data-slot='icon-ui-coins'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M17.57 17.3c0-1.18-1.27-1-5.22.6l-7.65-.8s-2.9-1.8-2.9.2c0 2.02 3.49 4.01 7.84 4.01 4.36 0 7.93-2 7.93-4'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M22.2 9.68c0-2-.78-1.12-7.73 0-7.07-1.38-8.04-2-8.04 0s3.53 3.64 7.89 3.64 7.89-1.63 7.89-3.64'
        fill='currentColor'
      />
      <path
        d='M6.79 11.08c-3.09.5-5 1.65-5 3.24 0 2 3.53 3.64 7.89 3.64s7.89-1.63 7.89-3.64q-.01-.6-.41-1.17'
        stroke='currentColor'
      />
      <ellipse
        cx='7.89'
        cy='3.64'
        rx='7.89'
        ry='3.64'
        transform='matrix(1 0 0 -1 6.43 9.88)'
        stroke='currentColor'
      />
      <path
        d='M17.57 17.76c0 2.01-3.53 3.64-7.89 3.64s-7.89-1.63-7.89-3.64'
        stroke='currentColor'
      />
      <path d='M22.2 9.68c0 2.01-3.52 3.64-7.88 3.64S6.43 11.7 6.43 9.68' stroke='currentColor' />
      <path d='M1.8 14.32v3.44' stroke='currentColor' />
      <path d='M6.43 6.24v3.44' stroke='currentColor' />
      <path d='M10.9 9.8v2.61' stroke='currentColor' />
      <path d='M6.43 18.33v2.62' stroke='currentColor' />
      <path d='M17.57 9.68v2.73' stroke='currentColor' />
      <path d='M13.1 18.22v2.73' stroke='currentColor' />
      <path d='M17.57 14.45v3.45' stroke='currentColor' />
      <path d='M22.2 6.37v3.45' stroke='currentColor' />
    </svg>
  )
}
