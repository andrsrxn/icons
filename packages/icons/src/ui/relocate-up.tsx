import type { Icon } from './types'

export const IconRelocateUp: Icon = ({
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
      data-slot='icon-ui-relocate-up'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='8.7'
        height='8.7'
        rx='2'
        transform='matrix(0 -1 -1 0 21.3 22.18)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        width='8.7'
        height='8.7'
        rx='2'
        transform='matrix(0 -1 -1 0 21.3 10.52)'
        fill='currentColor'
      />
      <rect
        width='8.7'
        height='8.7'
        rx='2'
        transform='matrix(0 -1 -1 0 21.3 22.18)'
        stroke='currentColor'
      />
      <rect
        width='8.7'
        height='8.7'
        rx='2'
        transform='matrix(0 -1 -1 0 21.3 10.52)'
        stroke='currentColor'
      />
      <path
        d='M7.36 4.05C8.66 5.35 9.3 6 9.33 6.81v.07c-.01.81-.67 1.46-1.97 2.77'
        stroke='currentColor'
      />
      <path
        d='M8.97 6.85h-.69c-2.44 0-3.66 0-4.48.67a3 3 0 0 0-.45.44c-.67.83-.67 2.05-.67 4.49v.24c0 2.2 0 3.32.56 4.1a3 3 0 0 0 .7.7c.78.56 1.9.56 4.1.56'
        stroke='currentColor'
      />
    </svg>
  )
}
