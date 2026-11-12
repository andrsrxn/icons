import type { Icon } from './types'

export const IconDecimalsIncrease: Icon = ({
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
      data-slot='icon-ui-decimals-increase'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='m5.53 2.76-.7.7c-1.33 1.33-2 2-2 2.82 0 .83.67 1.5 2 2.83l.7.7'
        stroke='currentColor'
      />
      <path d='M10.6 6.29H3.21' stroke='currentColor' />
      <path
        d='M13.4 9.62a.47.47 0 1 1-.92 0 .47.47 0 0 1 .93 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M5.97 20.97a.47.47 0 1 1-.93 0 .47.47 0 0 1 .93 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M21.31 17.68c0 2.07-.54 3.76-2.42 3.76s-2.42-1.69-2.42-3.76c0-2.08.63-3.77 2.42-3.77 1.8 0 2.42 1.69 2.42 3.77'
        stroke='currentColor'
      />
      <path
        d='M21.31 6.32c0 2.08-.54 3.77-2.42 3.77s-2.42-1.69-2.42-3.77c0-2.07.63-3.76 2.42-3.76 1.8 0 2.42 1.69 2.42 3.76'
        stroke='currentColor'
      />
      <path
        d='M13.64 17.68c0 2.07-.54 3.76-2.42 3.76S8.8 19.75 8.8 17.68c0-2.08.63-3.77 2.42-3.77 1.8 0 2.42 1.69 2.42 3.77'
        stroke='currentColor'
      />
    </svg>
  )
}
