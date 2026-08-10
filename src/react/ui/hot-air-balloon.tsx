import type { Icon } from './types'

export const IconHotAirBalloon: Icon = ({
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
      data-slot='hot-air-balloon'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M9.81 9.91c0 3.12 1.36 6.75 1.36 6.75-2.64 0-4.81-3.63-4.81-6.75s2.8-6.37 4.8-6.37c0 0-1.35 3.25-1.35 6.37m4.21 0c0 3.12-1.36 6.75-1.36 6.75 2.64 0 4.82-3.63 4.82-6.75s-2.8-6.37-4.82-6.37c0 0 1.36 3.25 1.36 6.37'
        fill='#000'
      />
      <path
        d='M17.7 9.91c0 3.12-2.55 7.11-5.7 7.11s-5.7-4-5.7-7.1c0-3.13 2.55-6.36 5.7-6.36s5.7 3.23 5.7 6.35Z'
        stroke='#000'
        strokeWidth='1.5'
      />
      <rect x='8.97' y='17.13' width='6.05' height='3.2' rx='1' stroke='#000' strokeWidth='1.5' />
      <ellipse cx='12' cy='10.11' rx='2.04' ry='6.55' stroke='#000' strokeWidth='1.5' />
    </svg>
  )
}
