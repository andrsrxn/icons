import type { Icon } from './types'

export const IconSeekBackwardThirtyRtl: Icon = ({
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
      data-slot='icon-ui-seek-backward-thirty-rtl'
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
      <path
        d='M7.33 10.12c.47-.45.92-.8 1.89-.8 1.7 0 2.2 1.95 1.35 2.74s-2.1.62-2.1.62'
        stroke='currentColor'
      />
      <path
        d='M7.33 15.27c.47.45.92.8 1.89.8 1.7 0 2.2-1.96 1.35-2.75s-2.1-.61-2.1-.61'
        stroke='currentColor'
      />
    </svg>
  )
}
