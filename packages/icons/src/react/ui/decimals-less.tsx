import type { Icon } from './types'

export const IconDecimalsLess: Icon = ({
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
      data-slot='icon-ui-decimals-less'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M16.39 4.63a2.23 2.23 0 1 1 4.46 0v3.38a2.23 2.23 0 1 1-4.46 0z'
        stroke='currentColor'
      />
      <path
        d='M8.95 4.63a2.23 2.23 0 1 1 4.46 0v3.38a2.23 2.23 0 1 1-4.46 0z'
        stroke='currentColor'
      />
      <path
        d='M16.39 15.99a2.23 2.23 0 1 1 4.46 0v3.38a2.23 2.23 0 1 1-4.46 0z'
        stroke='currentColor'
      />
      <path
        d='M13.4 21.13a.47.47 0 1 1-.92 0 .47.47 0 0 1 .93 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M5.97 9.78a.47.47 0 1 1-.93 0 .47.47 0 0 1 .93 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='m7.65 14.15.7.7c1.33 1.33 2 2 2 2.82 0 .83-.67 1.5-2 2.83l-.7.7'
        stroke='currentColor'
      />
      <path d='M2.57 17.68h7.4' stroke='currentColor' />
    </svg>
  )
}
