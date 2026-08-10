import type { Icon } from './types'

export const IconSatellite: Icon = ({
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
      data-slot='satellite'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='15.01'
        y='4.04'
        width='7.04'
        height='11.45'
        rx='2'
        transform='rotate(45 15.01 4.04)'
        fill='currentColor'
      />
      <rect
        x='15.01'
        y='4.04'
        width='7.04'
        height='11.45'
        rx='2'
        transform='rotate(45 15.01 4.04)'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='m18.3 10.71.74.74c1 1 1.5 1.5 1.5 2.12s-.5 1.12-1.5 2.12l-.47.47c-1 1-1.5 1.5-2.12 1.5s-1.12-.5-2.12-1.5l-.73-.74zM8.34 5c1-1 1.5-1.5 2.12-1.5s1.12.5 2.12 1.5l.74.73-4.7 4.71-.74-.74c-1-1-1.5-1.5-1.5-2.12s.5-1.12 1.5-2.12z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='m17.5 6.53 1.86-1.86M6.26 15.12c.1.67.38 1.22.9 1.74q.75.76 1.73.9m-5.12-1.31c.1 1.01.5 1.83 1.24 2.57a4 4 0 0 0 2.57 1.25'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
