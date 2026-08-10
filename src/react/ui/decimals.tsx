import type { Icon } from './types'

export const IconDecimals: Icon = ({
  size = 24,
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
      data-slot='decimals'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M15.2 10.1a2.52 2.52 0 1 1 5.03 0v3.8a2.52 2.52 0 0 1-5.03 0zm-7.92 0a2.52 2.52 0 0 1 5.04 0v3.8a2.52 2.52 0 0 1-5.04 0z'
        fill='currentColor'
      />
      <path
        d='M15.2 10.1a2.52 2.52 0 1 1 5.03 0v3.8a2.52 2.52 0 0 1-5.03 0zm-7.92 0a2.52 2.52 0 0 1 5.04 0v3.8a2.52 2.52 0 0 1-5.04 0z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
      <path d='M4.4 15.9a.52.52 0 1 1-1.05 0 .52.52 0 0 1 1.05 0' fill='currentColor' />
      <path
        d='M4.4 15.9a.52.52 0 1 1-1.05 0 .52.52 0 0 1 1.05 0Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
