import type { Icon } from './types'

export const IconZzz: Icon = ({
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
      data-slot='zzz'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M9.8 11.25H6.03c-1.07 0-1.6 0-1.73-.32-.13-.31.26-.68 1.05-1.41l3.3-3.09c.8-.73 1.18-1.1 1.06-1.41-.13-.32-.66-.32-1.73-.32H4.12M20.1 15.22h-5c-1.07 0-1.6 0-1.72-.32-.13-.31.26-.68 1.03-1.41L19.15 9c.77-.73 1.16-1.1 1.03-1.41s-.66-.31-1.72-.31h-5.14M10.34 19.3H8.8c-1.06 0-1.59 0-1.71-.31-.13-.32.25-.68 1.02-1.41l.9-.86c.76-.73 1.14-1.1 1.01-1.4C9.9 15 9.37 15 8.32 15h-1.4'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
