import type { Icon } from './types'

export const IconNotificationBox: Icon = ({
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
      data-slot='notification-box'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M7.59 3.65h7.88l.75 4.61h4.13v8.15c0 1.85 0 2.78-.58 3.35-.57.58-1.5.58-3.35.58H7.6c-1.85 0-2.78 0-3.35-.58-.58-.57-.58-1.5-.58-3.35V7.58c0-1.85 0-2.78.58-3.35.57-.58 1.5-.58 3.35-.58'
        fill='currentColor'
      />
      <path
        d='M20.35 11.64v4.77c0 1.85 0 2.78-.58 3.35-.57.58-1.5.58-3.35.58H7.6c-1.85 0-2.78 0-3.35-.58-.58-.57-.58-1.5-.58-3.35V7.58c0-1.85 0-2.78.58-3.35.57-.58 1.5-.58 3.35-.58h4.71m8.54 2.26a2.74 2.74 0 1 1-5.49 0 2.74 2.74 0 0 1 5.49 0Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
