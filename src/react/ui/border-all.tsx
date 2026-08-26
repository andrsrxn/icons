import type { Icon } from './types'

export const IconBorderAll: Icon = ({
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
      data-slot='ui-icon-border-all'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='21.24'
        y='2.76'
        width='18.48'
        height='18.48'
        rx='3'
        transform='rotate(90 21.24 2.76)'
        fill='currentColor'
      />
      <path
        d='M15.24 21.24H8.76c-2.83 0-4.24 0-5.12-.88-.88-.87-.88-2.29-.88-5.12V9c0-2.83 0-4.24.88-5.12S5.94 3 8.76 3h6.48c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12v6.25c0 2.83 0 4.25-.88 5.12s-2.3.88-5.12.88M12 15.37V8.63M12 5V3m0 18.24v-2m-7.12-7.11h-2m18.24 0h-2M15.37 12H8.63'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
