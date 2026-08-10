import type { Icon } from './types'

export const IconTextCenterlineRight: Icon = ({
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
      data-slot='text-centerline-right'
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
        transform='matrix(-1 0 0 1 19.89 8.88)'
        fill='currentColor'
      />
      <rect
        width='6.16'
        height='6.16'
        rx='2'
        transform='matrix(-1 0 0 1 19.89 8.88)'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M3.63 9.88h7.43m-7.43 8.77h16.74M3.63 14.12h7.43M3.63 5.35h16.74'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
