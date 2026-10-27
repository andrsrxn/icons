import type { Icon } from './types'

export const IconCurrencyMurCircle: Icon = ({
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
      data-slot='icon-ui-currency-mur-circle'
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
        <path d='M6.84 17.06V6.78' stroke='currentColor' />
        <path d='m11.93 17.06-2.9-4.62' stroke='currentColor' />
        <path d='M6.92 6.78h2.63a2.83 2.83 0 1 1 0 5.66H6.92' stroke='currentColor' />
        <path
          d='M18.25 12.33c-.16-.56-.92-.99-1.82-.99s-1.87.37-1.87 1.5c0 2.18 3.59.48 3.75 2.63.08 1.03-.96 1.59-1.88 1.59s-1.58-.43-1.87-1'
          stroke='currentColor'
        />
        <path d='M5.42 9.61h8.46' stroke='currentColor' />
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
