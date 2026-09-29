import type { Icon } from './types'

export const IconSparkleSquare: Icon = ({
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
      data-slot='icon-ui-sparkle-square'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M15.4 2.6c2.82 0 4.23 0 5.11.89.88.88.88 2.29.88 5.12v6.78c0 2.83 0 4.24-.88 5.12s-2.29.88-5.12.88H8.61c-2.83 0-4.24 0-5.12-.88s-.88-2.29-.88-5.12V8.61c0-2.83 0-4.24.88-5.12S5.78 2.6 8.6 2.6zm-1.2 7.47a3 3 0 1 0-4.4 4.07 3 3 0 0 0 4.4-4.07'
        fill='currentColor'
      />
      <path d='M6.53 12C9.17 12 12 9.15 12 6.53' stroke='currentColor' />
      <path d='M17.47 12C14.84 12 12 9.16 12 6.53' stroke='currentColor' />
      <path d='M6.53 12C9.15 12 12 14.89 12 17.47' stroke='currentColor' />
      <path d='M17.47 12c-2.6 0-5.47 2.85-5.47 5.47' stroke='currentColor' />
      <rect
        width='18.78'
        height='18.78'
        rx='3'
        transform='matrix(0 -1 -1 0 21.4 21.4)'
        stroke='currentColor'
      />
    </svg>
  )
}
