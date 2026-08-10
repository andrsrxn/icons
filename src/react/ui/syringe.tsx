import type { Icon } from './types'

export const IconSyringe: Icon = ({
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
      data-slot='syringe'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='9.76'
        y='11'
        width='4.49'
        height='7.98'
        rx='1'
        transform='rotate(45 9.76 11)'
        fill='currentColor'
      />
      <path
        d='m15.37 4.95 3.68 3.68-9.82 9.82c-.26.26-.38.38-.52.48a2 2 0 0 1-1.47.35c-.16-.03-.33-.09-.68-.2-.27-.1-.41-.14-.54-.2a2 2 0 0 1-.9-.9c-.06-.13-.1-.27-.2-.54a5 5 0 0 1-.2-.68 2 2 0 0 1 .35-1.47c.1-.14.22-.26.48-.52z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M14.4 4 20 9.6m-2.35-6.1 2.86 2.85M9.93 10.84l3.23 3.23m5.92-9.15L17.2 6.8M5.33 18.67l-1.32 1.32'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
