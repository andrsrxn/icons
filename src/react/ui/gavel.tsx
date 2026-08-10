import type { Icon } from './types'

export const IconGavel: Icon = ({
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
      data-slot='gavel'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='10.81'
        y='10.81'
        width='3.44'
        height='10.49'
        rx='1.5'
        transform='rotate(45 10.81 10.8)'
        fill='currentColor'
      />
      <path
        d='m10.81 10.8 2.44 2.44-6.2 6.2q-.2.21-.29.27a1.5 1.5 0 0 1-1.86 0l-.29-.27-.27-.28a1.5 1.5 0 0 1 0-1.87l.27-.28zM8.7 8.5l4.37-4.37 6.76 6.76-4.38 4.38z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='m14.67 16.03 5.93-5.93M7.91 9.27l5.94-5.93'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
