import type { Icon } from './types'

export const IconCurrencyMyrCircle: Icon = ({
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
      data-slot='icon-ui-currency-myr-circle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <g clipPath='url(#a)'>
        <path
          opacity='.2'
          d='M1.7 12a10.31 10.31 0 1 0 20.62 0A10.31 10.31 0 0 0 1.7 12'
          fill='currentColor'
        />
        <path d='M5.81 16.02V7.98' stroke='currentColor' />
        <path d='m12.09 16.02.6-8.04' stroke='currentColor' />
        <path d='m18.47 16.02-.6-8.04' stroke='currentColor' />
        <path d='m15.28 12.93 2.6-4.95' stroke='currentColor' />
        <path d='m15.28 12.93-2.6-4.95' stroke='currentColor' />
        <path d='M5.81 16.02V7.98' stroke='currentColor' />
        <path d='M9.79 16.02 7.52 12.4' stroke='currentColor' />
        <path d='M5.87 7.98h2.06a2.2 2.2 0 0 1 0 4.42H5.87' stroke='currentColor' />
        <path
          d='M1.7 12a10.31 10.31 0 1 1 20.63 0A10.31 10.31 0 0 1 1.7 12'
          stroke='currentColor'
        />
      </g>
      <defs>
        <clipPath id='a'>
          <path fill='#fff' d='M0 0h24v24H0z' />
        </clipPath>
      </defs>
    </svg>
  )
}
