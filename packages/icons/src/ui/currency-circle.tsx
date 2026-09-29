import type { Icon } from './types'

export const IconCurrencyCircle: Icon = ({
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
      data-slot='icon-ui-currency-circle'
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
          d='M15.43 8.64c-.3-1-1.74-1.77-3.43-1.77s-3.54.67-3.54 2.67c0 3.94 6.76.88 7.07 4.74.15 1.85-1.8 2.85-3.53 2.85s-2.98-.78-3.54-1.8'
          stroke='currentColor'
        />
        <path d='M12 6.87V5.62' stroke='currentColor' />
        <path d='M12 18.38v-1.25' stroke='currentColor' />
        <path d='M1.7 12A10.3 10.3 0 0 0 12 22.31 10.31 10.31 0 1 0 1.7 12' stroke='currentColor' />
      </g>
      <defs>
        <clipPath id='a'>
          <path fill='#fff' d='M0 0h24v24H0z' />
        </clipPath>
      </defs>
    </svg>
  )
}
