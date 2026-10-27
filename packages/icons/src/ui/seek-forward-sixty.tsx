import type { Icon } from './types'

export const IconSeekForwardSixty: Icon = ({
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
      data-slot='icon-ui-seek-forward-sixty'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M2.69 12a9.57 9.57 0 1 0 19.14 0A9.57 9.57 0 0 0 2.7 12'
        fill='currentColor'
      />
      <path d='M20.3 6.18a11 11 0 0 0-9.49-3.63 9.51 9.51 0 1 0 9.1 15.07' stroke='currentColor' />
      <path
        d='M17.14 7.26h1.1c1.42 0 2.13 0 2.57-.44s.44-1.14.44-2.56V3.15'
        stroke='currentColor'
      />
      <rect x='13.41' y='9.32' width='3.88' height='6.75' rx='1.94' stroke='currentColor' />
      <circle
        cx='9.14'
        cy='14.24'
        r='1.8'
        transform='rotate(90 9.14 14.24)'
        stroke='currentColor'
      />
      <path d='M7.34 14.14c0-1.2 0-4.2 2.79-5' stroke='currentColor' />
    </svg>
  )
}
