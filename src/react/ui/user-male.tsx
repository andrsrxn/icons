import type { Icon } from './types'

export const IconUserMale: Icon = ({
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
      data-slot='ui-icon-user-male'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M9.99 15.22v-.72c0-.41-.26-.77-.6-.99a5.8 5.8 0 0 1-2.73-5.03c-.1-1.98.85-5.94 5.34-5.94 5.62 0 5.48 4.45 5.48 5.94 0 1.37-.31 4-2.86 5.09-.42.18-.73.56-.73 1.02v.6c0 .48.34.9.8 1.03 1.02.3 2.76.95 3.55 2.03.37.5.64 1.28.82 1.92.17.6-.3 1.15-.91 1.15H5.87c-.63 0-1.1-.56-.92-1.16.2-.64.47-1.4.85-1.91.76-1.05 2.44-1.7 3.43-2.02.44-.14.76-.55.76-1.01Z'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M5.8 18.25c.67-.93 2.06-1.55 3.06-1.9h0c.4-.14.6-.2.73-.3q.26-.19.36-.5c.04-.15.04-.34.04-.72 0-.3 0-.46-.03-.59a1 1 0 0 0-.28-.46c-.1-.1-.27-.19-.61-.37-1.11-.6-2.4-1.82-2.4-4.93 0-3.07.84-5.94 5.33-5.94 5.62 0 5.65 3.5 5.65 5.94 0 2.17-.42 4-2.75 5-.33.14-.5.21-.6.28a1 1 0 0 0-.38.58c-.03.11-.03.26-.03.54 0 .32 0 .47.03.6q.09.39.45.6c.1.07.27.12.61.23 1.04.33 2.55.96 3.26 1.94q.24.34.44.8c.39.92.59 1.38.29 1.83-.3.44-.87.44-2 .44h-9.9c-1.16 0-1.73 0-2.03-.45s-.1-.92.32-1.84q.19-.44.44-.78'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
