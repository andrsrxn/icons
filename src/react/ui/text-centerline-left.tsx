import type { Icon } from './types'

export const IconTextCenterlineLeft: Icon = ({
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
      data-slot='text-centerline-left'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect opacity='.2' x='4.11' y='8.88' width='6.16' height='6.16' rx='2' fill='currentColor' />
      <rect
        x='4.11'
        y='8.88'
        width='6.16'
        height='6.16'
        rx='2'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M20.37 9.88h-7.43m7.43 8.77H3.63m16.74-4.53h-7.43m7.43-8.77H3.63'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
