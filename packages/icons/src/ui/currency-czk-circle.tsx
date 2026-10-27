import type { Icon } from './types'

export const IconCurrencyCzkCircle: Icon = ({
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
      data-slot='icon-ui-currency-czk-circle'
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
        <path d='M6.69 17.21V6.8' stroke='currentColor' />
        <path d='M11.85 17.21 8.2 13.1' stroke='currentColor' />
        <path d='m6.78 14.58 4.67-5.14' stroke='currentColor' />
        <path
          d='m14.15 7.8.15.15C15 8.65 15.34 9 15.77 9s.76-.38 1.42-1.1l.08-.09'
          stroke='currentColor'
        />
        <path
          d='M17.85 11.5s-.41-.5-1.6-.5c-1.18 0-2.68.9-2.68 3.1s1.47 3.11 2.69 3.11c1.13 0 1.59-.47 1.59-.47'
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
