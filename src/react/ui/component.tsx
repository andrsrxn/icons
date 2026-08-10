import type { Icon } from './types'

export const IconComponent: Icon = ({
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
      data-slot='component'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='12'
        y='3.12'
        width='5.02'
        height='5.02'
        rx='1'
        transform='rotate(45 12 3.12)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        x='12'
        y='13.77'
        width='5.02'
        height='5.02'
        rx='1'
        transform='rotate(45 12 13.77)'
        fill='currentColor'
      />
      <rect
        x='12'
        y='3.12'
        width='5.02'
        height='5.02'
        rx='1'
        transform='rotate(45 12 3.12)'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <rect
        x='12'
        y='13.77'
        width='5.02'
        height='5.02'
        rx='1'
        transform='rotate(45 12 13.77)'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <rect
        opacity='.2'
        x='3.12'
        y='12'
        width='5.02'
        height='5.02'
        rx='1'
        transform='rotate(-45 3.12 12)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        x='13.77'
        y='12'
        width='5.02'
        height='5.02'
        rx='1'
        transform='rotate(-45 13.77 12)'
        fill='currentColor'
      />
      <rect
        x='3.12'
        y='12'
        width='5.02'
        height='5.02'
        rx='1'
        transform='rotate(-45 3.12 12)'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <rect
        x='13.77'
        y='12'
        width='5.02'
        height='5.02'
        rx='1'
        transform='rotate(-45 13.77 12)'
        stroke='currentColor'
        strokeWidth='1.5'
      />
    </svg>
  )
}
