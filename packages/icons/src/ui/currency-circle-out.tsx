import type { Icon } from './types'

export const IconCurrencyCircleOut: Icon = ({
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
      data-slot='icon-ui-currency-circle-out'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <g clipPath='url(#a)'>
        <path
          opacity='.2'
          d='M1.69 12a10.31 10.31 0 1 0 20.62 0 10.31 10.31 0 0 0-20.62 0'
          fill='currentColor'
        />
        <path d='M12 6.67v-1.3' stroke='currentColor' />
        <path d='M12 18.63v-1.3' stroke='currentColor' />
        <path d='M22.27 12.9q.04-.45.04-.9a10.31 10.31 0 1 0-8.93 10.22' stroke='currentColor' />
        <path d='M19.17 14.92v6.58' stroke='currentColor' />
        <path
          d='m22.55 19.36-1.25 1.25c-1 1-1.5 1.5-2.12 1.5s-1.13-.5-2.13-1.5l-1.25-1.25'
          stroke='currentColor'
        />
        <path
          d='M15.56 8.5c-.32-1.03-1.8-1.83-3.56-1.83s-3.68.7-3.68 2.78c0 4.08 7.03.9 7.35 4.92'
          stroke='currentColor'
        />
        <path d='M8.32 15.46c.58 1.06 1.88 1.87 3.68 1.87q.58 0 1.14-.14' stroke='currentColor' />
      </g>
      <defs>
        <clipPath id='a'>
          <path fill='#fff' d='M0 0h24v24H0z' />
        </clipPath>
      </defs>
    </svg>
  )
}
