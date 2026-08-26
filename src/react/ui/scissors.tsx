import type { Icon } from './types'

export const IconScissors: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-scissors'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M3.02 5.74a3.3 3.3 0 1 0 6.58 0 3.3 3.3 0 0 0-6.58 0'
        fill='currentColor'
      />
      <path
        d='M3.02 5.74a3.3 3.3 0 0 0 3.3 3.29 3.3 3.3 0 1 0-3.3-3.3'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        opacity='.2'
        d='M3.02 18.26a3.3 3.3 0 1 0 6.58 0 3.3 3.3 0 0 0-6.58 0'
        fill='currentColor'
      />
      <path
        d='M3.02 18.26a3.3 3.3 0 0 0 3.3 3.3 3.3 3.3 0 1 0-3.3-3.3M21.1 5.75 9.04 15.99m0-8.17L21.1 18.07'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
