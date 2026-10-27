import type { Icon } from './types'

export const IconCurrencyBamCircle: Icon = ({
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
      data-slot='icon-ui-currency-bam-circle'
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
        <path d='M5.78 15.83V8.17' stroke='currentColor' />
        <path d='M9.67 15.83 7.39 11.7' stroke='currentColor' />
        <path d='m5.78 13.44 3.89-5.27' stroke='currentColor' />
        <path d='m12.14 15.83.57-7.65' stroke='currentColor' />
        <path d='m18.22 15.83-.57-7.65' stroke='currentColor' />
        <path d='m15.18 12.88 2.47-4.7' stroke='currentColor' />
        <path d='m15.18 12.88-2.47-4.7' stroke='currentColor' />
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
