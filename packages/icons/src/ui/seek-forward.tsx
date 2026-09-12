import type { Icon } from './types'

export const IconSeekForward: Icon = ({
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
      data-slot='icon-ui-seek-forward'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M20.3 6.18a11 11 0 0 0-9.49-3.63 9.51 9.51 0 1 0 9.1 15.07' stroke='currentColor' />
      <rect x='12.98' y='9.38' width='4.09' height='6.69' rx='2' stroke='currentColor' />
      <path
        d='M17.14 7.26h1.1c1.42 0 2.13 0 2.57-.44s.44-1.14.44-2.56V3.15'
        stroke='currentColor'
      />
      <path
        d='m6.79 11.74 1.56-1.42c.72-.66 1.08-.98 1.37-.85s.3.62.3 1.59v4.92'
        stroke='currentColor'
      />
    </svg>
  )
}
