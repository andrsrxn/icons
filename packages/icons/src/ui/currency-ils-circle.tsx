import type { Icon } from './types'

export const IconCurrencyIlsCircle: Icon = ({
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
      data-slot='icon-ui-currency-ils-circle'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <g clipPath='url(#a)'>
        <path
          opacity='.2'
          d='M1.7 12.29a10.31 10.31 0 1 0 20.63 0 10.31 10.31 0 0 0-20.62 0'
          fill='currentColor'
        />
        <path d='M6.97 7.96v8.66' stroke='currentColor' />
        <path
          d='M6.96 7.96h1.37c2.43 0 3.65 0 4.47.66a3 3 0 0 1 .46.46c.66.82.66 2.04.66 4.47'
          stroke='currentColor'
        />
        <path
          d='M10.46 11.16v5.46h.98c2.83 0 4.25 0 5.13-.88s.87-2.3.87-5.12h0v-2.5'
          stroke='currentColor'
        />
        <path
          d='M1.72 12.29a10.31 10.31 0 1 1 20.62 0 10.31 10.31 0 0 1-20.62 0'
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
