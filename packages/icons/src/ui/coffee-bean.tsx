import type { Icon } from './types'

export const IconCoffeeBean: Icon = ({
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
      data-slot='icon-ui-coffee-bean'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M4.25 21.19 9.2 18.6l2.53-3.77.3-5.54L15 4.77l4.3-2.18c4.28 3.85 3.02 10.53-1.56 15.1-4.15 4.16-9.77 6.01-13.48 3.5'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M17.9 17.52c-5.28 5.29-11.07 5.99-14.2 2.85-3.14-3.13-2.15-9.2 2.85-14.2S17.64.87 20.42 3.66c2.78 2.78 2.2 9.15-2.52 13.86'
        stroke='currentColor'
      />
      <path
        d='M19.55 3.16c-1.77.1-3.79.56-5.5 3.05-2.94 4.25-1.03 5.9-3.26 9.74a8.9 8.9 0 0 1-6.83 4.5'
        stroke='currentColor'
      />
    </svg>
  )
}
