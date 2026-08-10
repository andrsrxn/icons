import type { Icon } from './types'

export const IconBricks: Icon = ({
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
      data-slot='bricks'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect opacity='.2' x='4' y='4' width='16' height='16' rx='2' fill='currentColor' />
      <rect x='4' y='4' width='16' height='16' rx='2' stroke='currentColor' strokeWidth='1.5' />
      <path
        d='M4 9h16m-8 6V9M8.04 9V4m0 16v-5m7.92-6V4m0 16v-5M4 15h16'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
