import type { Icon } from './types'

export const IconParking: Icon = ({
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
      data-slot='icon-ui-parking'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.58 12a10.41 10.41 0 1 0 20.83 0 10.41 10.41 0 0 0-20.83 0'
        fill='currentColor'
      />
      <path d='M1.6 12a10.41 10.41 0 1 1 20.82 0 10.41 10.41 0 0 1-20.83 0' stroke='currentColor' />
      <path
        d='M9.16 18.5V7.63c0-.48 0-.71.15-.86.14-.14.38-.14.85-.14h3.29a3.3 3.3 0 0 1 3.22 3.4c0 1.88-1.44 3.4-3.22 3.4H9.2'
        stroke='currentColor'
      />
    </svg>
  )
}
