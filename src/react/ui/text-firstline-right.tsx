import type { Icon } from './types'

export const IconTextFirstlineRight: Icon = ({
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
      data-slot='text-firstline-right'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        width='6.16'
        height='6.16'
        rx='2'
        transform='matrix(-1 0 0 1 19.89 5)'
        fill='currentColor'
      />
      <rect
        width='6.16'
        height='6.16'
        rx='2'
        transform='matrix(-1 0 0 1 19.89 5)'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M3.63 6h7.42m-7.42 8.78h16.74M3.63 10.25h7.42m-7.42 8.91h16.74'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
