import type { Icon } from './types'

export const IconTextFirstlineLeft: Icon = ({
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
      data-slot='text-firstline-left'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect opacity='.2' x='4.11' y='5' width='6.16' height='6.16' rx='2' fill='currentColor' />
      <rect
        x='4.11'
        y='5'
        width='6.16'
        height='6.16'
        rx='2'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M20.37 6h-7.42m7.42 8.78H3.63m16.74-4.53h-7.42m7.42 8.91H3.63'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
