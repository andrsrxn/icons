import type { Icon } from './types'

export const IconStrawberry: Icon = ({
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
      data-slot='icon-ui-strawberry'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M20.83 11.85c0 5.71-4.86 10.62-8.83 10.62-3.72 0-8.83-4.9-8.83-10.62S6.91 5.62 12 6.32c5.02-.67 8.83-.18 8.83 5.53'
        fill='currentColor'
      />
      <path
        d='M20.83 11.8c-.48 5.96-4.87 10.57-8.83 10.57-3.46 0-8.3-4.68-8.83-10.56 0-5.84 4.42-6.9 8.83-5.2 4.53-1.68 8.83-.64 8.83 5.2'
        stroke='currentColor'
      />
      <path d='M12 1.43v5.13' stroke='currentColor' />
      <path
        d='M11.98 6.32A6.1 6.1 0 0 0 7.4 2c-.36-.07-.53-.11-.73.02-.2.14-.2.32-.22.67-.04.85.04 2.22.8 3.23'
        stroke='currentColor'
      />
      <path
        d='M12.02 6.32A6.1 6.1 0 0 1 16.6 2c.36-.07.53-.11.73.02.2.14.2.32.22.67.04.85-.04 2.22-.8 3.23'
        stroke='currentColor'
      />
      <path d='m8.02 10.05-.77 1.7' stroke='currentColor' />
      <path d='m8.8 14.92-.57 1.76' stroke='currentColor' />
      <path d='M12 9.97v1.86' stroke='currentColor' />
      <path d='M12 16.68v1.86' stroke='currentColor' />
      <path d='m16.04 10.03.65 1.74' stroke='currentColor' />
      <path d='m15.2 14.92.56 1.77' stroke='currentColor' />
    </svg>
  )
}
