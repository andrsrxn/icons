import type { Icon } from './types'

export const IconSatellite: Icon = ({
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
      data-slot='icon-ui-satellite'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='15.49'
        y='2.42'
        width='8.61'
        height='13.99'
        rx='2'
        transform='rotate(45 15.49 2.42)'
        fill='currentColor'
      />
      <rect
        x='15.49'
        y='2.42'
        width='8.61'
        height='13.99'
        rx='2'
        transform='rotate(45 15.49 2.42)'
        stroke='currentColor'
      />
      <path
        d='m19.5 10.58 1.38 1.37c1 1 1.5 1.5 1.5 2.13s-.5 1.12-1.5 2.12l-1.51 1.5c-1 1-1.5 1.5-2.12 1.5s-1.12-.5-2.12-1.5l-1.38-1.36z'
        stroke='currentColor'
      />
      <path
        d='M7.8 3.12c1-1 1.5-1.5 2.12-1.5s1.13.5 2.13 1.5l1.37 1.37-5.76 5.76L6.3 8.87c-1-1-1.5-1.5-1.5-2.12s.5-1.12 1.5-2.12z'
        stroke='currentColor'
      />
      <path d='M18.53 5.47 20.8 3.2' stroke='currentColor' />
      <path d='M4.79 15.97c.12.82.46 1.5 1.1 2.12.62.63 1.3.98 2.12 1.1' stroke='currentColor' />
      <path d='M1.74 17.6a5 5 0 0 0 1.52 3.14c.91.9 1.9 1.4 3.15 1.52' stroke='currentColor' />
    </svg>
  )
}
