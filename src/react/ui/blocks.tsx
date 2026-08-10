import type { Icon } from './types'

export const IconBlocks: Icon = ({
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
      data-slot='blocks'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect opacity='.2' x='3.81' y='13.53' width='6.85' height='6.85' rx='2' fill='currentColor' />
      <rect opacity='.2' x='3.81' y='6.68' width='6.85' height='6.85' rx='2' fill='currentColor' />
      <rect
        opacity='.2'
        x='10.66'
        y='13.53'
        width='6.85'
        height='6.85'
        rx='2'
        fill='currentColor'
      />
      <rect opacity='.2' x='13.58' y='3.72' width='6.7' height='6.7' rx='2' fill='currentColor' />
      <rect
        x='3.81'
        y='13.53'
        width='6.85'
        height='6.85'
        rx='2'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <rect
        x='3.81'
        y='6.68'
        width='6.85'
        height='6.85'
        rx='2'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <rect
        x='10.66'
        y='13.53'
        width='6.85'
        height='6.85'
        rx='2'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <rect
        x='13.58'
        y='3.72'
        width='6.7'
        height='6.7'
        rx='2'
        stroke='currentColor'
        strokeWidth='1.5'
      />
    </svg>
  )
}
