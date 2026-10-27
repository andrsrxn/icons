import type { Icon } from './types'

export const IconCurrencyBgnCircle: Icon = ({
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
      data-slot='icon-ui-currency-bgn-circle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <g clipPath='url(#a)'>
        <path
          opacity='.2'
          d='M1.7 12a10.31 10.31 0 1 0 20.63 0A10.31 10.31 0 0 0 1.7 12'
          fill='currentColor'
        />
        <path d='M13.9 16.05V7.58' stroke='currentColor' />
        <path d='M13.97 7.58h1.77a2.06 2.06 0 0 1 0 4.12h-1.77' stroke='currentColor' />
        <path d='M13.97 11.7h2.37a2.18 2.18 0 1 1 0 4.35h-2.37' stroke='currentColor' />
        <path d='M11.17 7.68v8.29' stroke='currentColor' />
        <path d='M7.13 7.68v4.8c0 3.13-1.64 3.49-1.64 3.49' stroke='currentColor' />
        <path d='M7.13 7.68h4.04' stroke='currentColor' />
        <path
          d='M1.72 12a10.31 10.31 0 1 1 20.62 0 10.31 10.31 0 0 1-20.62 0'
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
