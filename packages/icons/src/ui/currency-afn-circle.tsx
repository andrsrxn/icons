import type { Icon } from './types'

export const IconCurrencyAfnCircle: Icon = ({
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
      data-slot='icon-ui-currency-afn-circle'
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
          d='M8.86 14.14h5.83m0 0h.12m0 0h-.12a4.3 4.3 0 0 1-2.84-1.5c-2.33-2.45-.6-5.23 1.49-4.72 2.22.55 1.84 4.15 1.47 6.22'
          stroke='currentColor'
        />
        <path
          d='M13.47 5.19a.57.57 0 1 1-1.14 0 .57.57 0 0 1 1.14 0'
          fill='currentColor'
          stroke='currentColor'
        />
        <path d='M11.77 19.38V16.1' stroke='currentColor' />
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
