import type { Icon } from './types'

export const IconDumbbell: Icon = ({
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
      data-slot='dumbbell'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='14.78'
        y='5.11'
        width='2.98'
        height='5.82'
        rx='1.49'
        transform='rotate(-45 14.78 5.1)'
        fill='#000'
      />
      <rect
        opacity='.2'
        width='2.98'
        height='5.82'
        rx='1.49'
        transform='scale(-1 1)rotate(45 -20.4 1.23)'
        fill='#000'
      />
      <rect
        opacity='.2'
        x='10.87'
        y='6.79'
        width='3.95'
        height='8.97'
        rx='1.98'
        transform='rotate(-45 10.87 6.79)'
        fill='#000'
      />
      <rect
        opacity='.2'
        width='3.95'
        height='8.97'
        rx='1.98'
        transform='scale(-1 1)rotate(45 -16.51 -2.76)'
        fill='#000'
      />
      <rect
        x='14.78'
        y='5.11'
        width='2.98'
        height='5.82'
        rx='1.49'
        transform='rotate(-45 14.78 5.1)'
        stroke='#000'
        strokeWidth='1.5'
      />
      <rect
        width='2.98'
        height='5.82'
        rx='1.49'
        transform='scale(-1 1)rotate(45 -20.4 1.23)'
        stroke='#000'
        strokeWidth='1.5'
      />
      <rect
        x='10.87'
        y='6.79'
        width='3.95'
        height='8.97'
        rx='1.98'
        transform='rotate(-45 10.87 6.79)'
        stroke='#000'
        strokeWidth='1.5'
      />
      <rect
        width='3.95'
        height='8.97'
        rx='1.98'
        transform='scale(-1 1)rotate(45 -16.51 -2.76)'
        stroke='#000'
        strokeWidth='1.5'
      />
      <path
        d='M14.18 10.1a5.3 5.3 0 0 0-2.55 1.53 5.3 5.3 0 0 0-1.53 2.55m9.95-10-1 .99M4.18 20.05l.99-1'
        stroke='#000'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
