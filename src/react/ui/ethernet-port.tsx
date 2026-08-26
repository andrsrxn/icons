import type { Icon } from './types'

export const IconEthernetPort: Icon = ({
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
      data-slot='ui-icon-ethernet-port'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M2.41 9.7c0-1.88 0-2.82.59-3.4.58-.6 1.53-.6 3.41-.6H17.6c1.88 0 2.83 0 3.41.6.59.58.59 1.52.59 3.4v3.63c0 .63 0 .95-.07 1.2a2 2 0 0 1-1.4 1.4c-.26.08-.58.08-1.22.08l-.52.01a2 2 0 0 0-.9.36c-.1.07-.2.16-.4.34l-.55.51c-.57.53-.85.79-1.2.93-.35.13-.74.13-1.51.13h-3.78c-.69 0-1.03 0-1.34-.1-.32-.12-.59-.33-1.13-.75l-1.17-.9-.25-.2a2 2 0 0 0-.95-.33h-.32c-.43 0-.65 0-.83-.04a2 2 0 0 1-1.6-1.6c-.04-.18-.04-.4-.04-.83z'
        fill='currentColor'
      />
      <path
        d='M2.41 10.56c0-1.73 0-2.6.35-3.25a3 3 0 0 1 1.25-1.25c.66-.35 1.53-.35 3.26-.35h9.46c1.73 0 2.6 0 3.26.35a3 3 0 0 1 1.25 1.25c.35.65.35 1.52.35 3.25v2.42c0 1.35-1.1 2.44-2.44 2.44-.74 0-1.43.33-1.9.9l-.43.53c-.26.33-.4.49-.54.62a3 3 0 0 1-1.66.8c-.2.02-.4.02-.82.02h-3.64c-.35 0-.53 0-.7-.02a3 3 0 0 1-1.8-.88l-.44-.54-.38-.48a2.5 2.5 0 0 0-1.95-.95 2.5 2.5 0 0 1-2.48-2.47z'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M6.41 9.55a.57.57 0 1 1-1.14 0 .57.57 0 0 1 1.14 0m4.11 0a.57.57 0 1 1-1.15 0 .57.57 0 0 1 1.15 0m4.11 0a.57.57 0 1 1-1.15 0 .57.57 0 0 1 1.15 0m4.1 0a.57.57 0 1 1-1.14 0 .57.57 0 0 1 1.14 0'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
