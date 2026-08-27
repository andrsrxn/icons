import type { Icon } from './types'

export const IconGavel: Icon = ({
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
      data-slot='ui-icon-gavel'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='10.48'
        y='10.8'
        width='3.94'
        height='12'
        rx='1.5'
        transform='rotate(45 10.48 10.8)'
        fill='currentColor'
      />
      <path
        d='m10.48 10.8 2.79 2.78-7.1 7.1c-.3.3-.46.46-.61.55a1.5 1.5 0 0 1-1.55 0c-.15-.1-.3-.25-.62-.56v0c-.3-.3-.46-.46-.56-.62a1.5 1.5 0 0 1 0-1.54 4 4 0 0 1 .56-.62zM8.06 8.15l5-5 7.73 7.72-5 5zm6.84 8.62 6.78-6.79M7.17 9.04l6.78-6.79'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
