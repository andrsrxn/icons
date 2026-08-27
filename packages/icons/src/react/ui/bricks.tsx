import type { Icon } from './types'

export const IconBricks: Icon = ({
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
      data-slot='ui-icon-bricks'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='2.79'
        y='2.79'
        width='18.42'
        height='18.42'
        rx='2'
        fill='currentColor'
      />
      <rect
        x='2.79'
        y='2.79'
        width='18.42'
        height='18.42'
        rx='3'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M2.8 8.55h18.4m-9.2 6.9v-6.9m-4.56 0V2.79m0 18.41v-5.75m9.12-6.9V2.79m0 18.41v-5.75m-13.76 0h18.4'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
