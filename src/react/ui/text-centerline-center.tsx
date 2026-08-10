import type { Icon } from './types'

export const IconTextCenterlineCenter: Icon = ({
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
      data-slot='text-centerline-center'
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
        transform='matrix(-1 0 0 1 15.08 8.88)'
        fill='currentColor'
      />
      <rect
        width='6.16'
        height='6.16'
        rx='2'
        transform='matrix(-1 0 0 1 15.08 8.88)'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M3.63 18.65h16.74M3.63 5.35h16.74M3.63 9.83H6m12 0h2.37M3.63 14.08H6m12 0h2.37'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
