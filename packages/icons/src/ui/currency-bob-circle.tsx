import type { Icon } from './types'

export const IconCurrencyBobCircle: Icon = ({
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
      data-slot='icon-ui-currency-bob-circle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <g clipPath='url(#a)'>
        <path
          opacity='.2'
          d='M1.69 12a10.31 10.31 0 1 0 20.62 0 10.31 10.31 0 0 0-20.62 0'
          fill='currentColor'
        />
        <path
          d='M10.55 9.14c-.23-.77-1.27-1.35-2.5-1.35s-2.58.5-2.58 2.04c0 3.01 4.93.67 5.15 3.63.11 1.41-1.32 2.17-2.57 2.17-1.26 0-2.18-.59-2.58-1.37'
          stroke='currentColor'
        />
        <path d='M8.05 16.6V6.82' stroke='currentColor' />
        <path
          d='M13.39 11.57h2.73a2.52 2.52 0 0 1 0 5.03h-1.9a.83.83 0 0 1-.83-.82V7.19'
          stroke='currentColor'
        />
        <path
          d='M1.7 12a10.31 10.31 0 1 1 20.61 0A10.31 10.31 0 0 1 1.7 12'
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
