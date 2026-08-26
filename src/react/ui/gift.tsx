import type { Icon } from './types'

export const IconGift: Icon = ({
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
      data-slot='ui-icon-gift'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='4.87'
        y='11.29'
        width='14.26'
        height='10.11'
        rx='2'
        fill='currentColor'
      />
      <path
        d='M4.87 11.29v4.11c0 2.83 0 4.24.88 5.12s2.29.88 5.12.88h2.26c2.83 0 4.24 0 5.12-.88s.88-2.3.88-5.12v-4.1'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        x='3.03'
        y='7.97'
        width='17.93'
        height='3.32'
        rx='1'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M12 11.29V21.4m2.75-13.43A2.75 2.75 0 1 0 12 5.23v2.74z'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M9.25 7.97A2.75 2.75 0 1 1 12 5.23v2.74z'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
