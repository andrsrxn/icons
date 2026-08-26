import type { Icon } from './types'

export const IconLuggage: Icon = ({
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
      data-slot='ui-icon-luggage'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='5.84'
        y='7.86'
        width='12.31'
        height='12.31'
        rx='2'
        fill='currentColor'
      />
      <rect
        x='5.84'
        y='7.86'
        width='12.31'
        height='12.31'
        rx='2'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M9.54 7.62V2.7m.63 13.54v-4.92M8.3 21.78v-1.6m6.16-12.56V2.7m-.63 13.54v-4.92m1.87 10.46v-1.6M16.92 2.7H7.08'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
