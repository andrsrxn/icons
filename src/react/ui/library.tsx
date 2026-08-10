import type { Icon } from './types'

export const IconLibrary: Icon = ({
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
      data-slot='library'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path opacity='.2' fill='currentColor' d='M3.83 4.92h4.52v5H3.83z' />
      <path opacity='.2' fill='currentColor' d='M8.34 4.92h4.52v5H8.34z' />
      <rect
        opacity='.2'
        x='12.86'
        y='5.53'
        width='4.52'
        height='4.98'
        rx='2'
        transform='rotate(-15 12.86 5.53)'
        fill='currentColor'
      />
      <rect
        x='3.83'
        y='4.7'
        width='4.52'
        height='14.6'
        rx='1.5'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <rect
        x='8.34'
        y='4.7'
        width='4.52'
        height='14.6'
        rx='1.5'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <rect
        x='12.86'
        y='5.53'
        width='4.52'
        height='14.6'
        rx='1.5'
        transform='rotate(-15 12.86 5.53)'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M3.98 9.55h8.73m1.62 0 3.76-1.14'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
