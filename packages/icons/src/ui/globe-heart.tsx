import type { Icon } from './types'

export const IconGlobeHeart: Icon = ({
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
      data-slot='icon-ui-globe-heart'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M1.7 11.92c0 5.65 4.57 10.23 10.22 10.23 2.12 0 3.34-.57 4.08-1.02l-1.83-1.49-.78-2.67 1.87-1.76 2.39 1.23 2.4-1.23 1.09 1.07a8 8 0 0 0 1.01-4.36 10.23 10.23 0 1 0-20.46 0'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='M22.3 12a10.3 10.3 0 1 0-11.23 10.27' stroke='currentColor' />
      <path
        d='M16.37 12c0-5.7-1.96-10.3-4.37-10.3S7.63 6.3 7.63 12c0 4.77 1.56 9.03 3.42 10.2'
        stroke='currentColor'
      />
      <path d='M1.7 12h20.6' stroke='currentColor' />
      <path
        d='M17.7 16.53c.24-.4 1.02-1.2 2.09-1.2 1.33 0 2.34 1.52 1.9 3.13s-2.98 2.92-4 4.07c-1.01-1.15-3.57-2.46-4-4.07s.57-3.13 1.9-3.13c1.08 0 1.85.8 2.1 1.2'
        stroke='currentColor'
      />
    </svg>
  )
}
