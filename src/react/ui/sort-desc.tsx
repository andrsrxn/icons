import type { Icon } from './types'

export const IconSortDesc: Icon = ({
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
      data-slot='sort-desc'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M4 5.25a.75.75 0 0 0 0 1.5zm13.13 1.5a.75.75 0 0 0 0-1.5zM4 11.25a.75.75 0 0 0 0 1.5zm8 1.5a.75.75 0 0 0 0-1.5zm4.38 6.87a.75.75 0 0 0 1.5 0zm1.5-9.62a.75.75 0 0 0-1.5 0zM4 17.25a.75.75 0 0 0 0 1.5zm6 1.5a.75.75 0 0 0 0-1.5zm10.77-1.2a.75.75 0 0 0-1.04-1.09l.52.54zm-2.26 1.12.52.55zm-2.76 0-.52.55zm-1.23-2.2a.75.75 0 0 0-1.04 1.08L14 17zm2.61 3.15v-.75zM4 6v.75h13.13v-1.5H4zm0 6v.75h8v-1.5H4zm13.13 7.62h.75V10h-1.5v9.62zM4 18v.75h6v-1.5H4zm16.25-1-.52-.54L18 18.13l.52.54.52.55 1.74-1.67zm-4.5 1.68.51-.55-1.74-1.67L14 17l-.52.55 1.75 1.67zm2.76 0-.52-.55a8 8 0 0 1-.86.74v1.5c.42 0 .76-.18 1.04-.39q.4-.3.86-.76zm-2.76 0-.52.54q.47.46.86.77c.28.2.62.38 1.04.38v-1.5h-.01l-.14-.1a8 8 0 0 1-.72-.64z'
        fill='currentColor'
      />
    </svg>
  )
}
