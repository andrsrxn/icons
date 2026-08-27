import type { Icon } from './types'

export const IconFlashlight: Icon = ({
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
      data-slot='ui-icon-flashlight'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M11.94 4.88a.8.8 0 0 1 .67.23L19 11.49a.66.66 0 0 1-.16 1.05l-4.62 2.5c-.25.14-.38.21-.5.3s-.21.19-.42.4l-4.24 4.23c-.98.98-1.47 1.47-2.06 1.6a2 2 0 0 1-.8 0c-.6-.13-1.08-.62-2.07-1.6s-1.47-1.47-1.59-2.06a2 2 0 0 1 0-.8c.12-.6.61-1.08 1.6-2.07l4.19-4.19c.23-.23.34-.34.43-.47.1-.13.17-.28.32-.57l2.24-4.49a.8.8 0 0 1 .62-.44'
        fill='currentColor'
      />
      <path
        d='M11.47 5.09c.93-.94 1.4-1.4 1.9-1.63a3 3 0 0 1 2.43 0c.51.23.98.7 1.9 1.63l1.35 1.34c.92.92 1.38 1.37 1.6 1.88a3 3 0 0 1 0 2.45c-.22.5-.68.96-1.6 1.88l-.29.28a2 2 0 0 1-.39.24q-.1.06-.37.15l-3.77 1.41c-.4.15-.6.23-.79.34-.18.12-.33.27-.64.58l-4.37 4.37c-.7.7-1.04 1.04-1.43 1.2a2 2 0 0 1-1.4.01c-.4-.14-.76-.48-1.47-1.16-.73-.71-1.1-1.06-1.26-1.47a2 2 0 0 1-.02-1.44c.16-.4.52-.76 1.24-1.48l4.3-4.3c.3-.3.44-.45.56-.62.11-.18.19-.37.34-.76l1.52-3.9c.07-.18.1-.27.15-.36a2 2 0 0 1 .5-.64m.32-.32 7.46 7.45M12.12 12l-2.37 2.37'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
