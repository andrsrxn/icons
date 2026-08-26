import type { Icon } from './types'

export const IconMail: Icon = ({
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
      data-slot='ui-icon-mail'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M3 9.24c0-1.85 0-2.78.58-3.05.57-.27 1.28.33 2.7 1.51l4.44 3.71c.61.51.92.77 1.28.77s.67-.26 1.28-.77l4.44-3.7c1.42-1.2 2.13-1.79 2.7-1.52S21 7.4 21 9.24v7.53c0 .94 0 1.41-.3 1.7-.29.3-.76.3-1.7.3H5c-.94 0-1.41 0-1.7-.3-.3-.29-.3-.76-.3-1.7z'
        fill='currentColor'
      />
      <rect
        x='2.7'
        y='4.77'
        width='18.61'
        height='14.47'
        rx='3'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m4.14 5.77 3.68 3.68c2 2 3 3 4.24 3 1.24.01 2.24-1 4.25-3L20 5.78'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
