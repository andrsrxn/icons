import type { Icon } from './types'

export const IconLuggage: Icon = ({
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
      data-slot='luggage'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='6.57'
        y='8.13'
        width='10.86'
        height='10.86'
        rx='2'
        fill='currentColor'
      />
      <rect
        x='6.57'
        y='8.13'
        width='10.86'
        height='10.86'
        rx='2'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M9.83 7.93V3.59m.56 11.94v-4.34m-1.65 9.22V19m5.43-11.07V3.59m-.56 11.94v-4.34m1.65 9.22V19m1.08-15.41H7.66'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
