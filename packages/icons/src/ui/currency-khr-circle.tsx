import type { Icon } from './types'

export const IconCurrencyKhrCircle: Icon = ({
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
      data-slot='icon-ui-currency-khr-circle'
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
          d='M11.1 15.88a1.48 1.48 0 0 0-2.46 1.63c.71 1.46 2.78 1.46 4.5 1.46v-8.26c0-.45 0-.67-.1-.87-.08-.2-.25-.34-.59-.64l-1.57-1.37h0a3 3 0 0 1-.5-.5 1 1 0 0 1-.07-.9c.06-.14.18-.28.42-.56h0c.24-.28.36-.42.5-.5a1 1 0 0 1 .89-.08c.14.06.28.17.56.4l1.06.88'
          stroke='currentColor'
        />
        <path d='M15.52 11.9h-4.8' stroke='currentColor' />
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
