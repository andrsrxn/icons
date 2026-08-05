import type { Icon } from './types'

export const IconLayout: Icon = ({
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
      data-slot='layout'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect opacity='.2' x='3.64' y='3.72' width='7.07' height='9.52' rx='2' fill='currentColor' />
      <rect
        opacity='.2'
        width='7.07'
        height='9.52'
        rx='2'
        transform='matrix(1 0 0 -1 13.28 20.28)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        x='3.64'
        y='15.77'
        width='7.07'
        height='4.51'
        rx='1.5'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        width='7.07'
        height='4.51'
        rx='1.5'
        transform='matrix(1 0 0 -1 13.28 8.23)'
        fill='currentColor'
      />
      <rect
        x='3.64'
        y='3.72'
        width='7.07'
        height='9.52'
        rx='2'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <rect
        width='7.07'
        height='9.52'
        rx='2'
        transform='matrix(1 0 0 -1 13.28 20.28)'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <rect
        x='3.64'
        y='15.77'
        width='7.07'
        height='4.51'
        rx='1.5'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <rect
        width='7.07'
        height='4.51'
        rx='1.5'
        transform='matrix(1 0 0 -1 13.28 8.23)'
        stroke='currentColor'
        strokeWidth='1.5'
      />
    </svg>
  )
}
