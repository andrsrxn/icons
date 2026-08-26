import type { Icon } from './types'

export const IconPoliceBadge: Icon = ({
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
      data-slot='ui-icon-police-badge'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12.23 2.4a1 1 0 0 0-.45 0L5.43 3.87a1 1 0 0 0-.78.97v3.13a1 1 0 0 1-.12.47l-2.15 4.05q-.16.3-.1.63c.68 3.37 3.59 9.03 9.73 9.03 6.26 0 8.94-5.93 9.6-9a1 1 0 0 0-.11-.68l-2.53-4.25a1 1 0 0 1-.13-.64l.35-2.63a1 1 0 0 0-.76-1.1zm.5 5.68.56 1.06a1 1 0 0 0 .71.51l1.18.2c.7.11 1.05.16 1.13.4s-.18.49-.69.98l-.83.86a1 1 0 0 0-.27.84l.17 1.18c.12.7.18 1.05-.02 1.2s-.52-.02-1.15-.35l-1.07-.53a1 1 0 0 0-.88 0l-1.08.53c-.63.33-.94.5-1.14.35s-.15-.5-.03-1.2l.17-1.18a1 1 0 0 0-.27-.84l-.83-.86c-.51-.5-.76-.74-.69-.98s.43-.29 1.14-.4l1.17-.2a1 1 0 0 0 .72-.51l.55-1.06c.32-.64.48-.96.73-.96s.4.32.72.96'
        fill='currentColor'
      />
      <path
        d='M19.4 4.17a14.7 14.7 0 0 0-7.4-1.7c-2.96 0-4.72.4-7.39 1.7m-.06.11c.42 1.57.48 2.38.27 3.84-.18 1.24-1.09 2.58-1.74 3.4-.34.43-.51.64-.56.88s.02.46.14.88c.7 2.4 3.05 8.27 9.35 8.27 6.12 0 8.52-5.57 9.28-8.07.16-.5.23-.76.17-1.02-.07-.27-.3-.51-.77-.99-.76-.77-1.74-2.01-1.88-3.35a6.2 6.2 0 0 1 .66-3.84'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M11.21 8.25c.39-.76.58-1.14.9-1.14.3 0 .5.38.88 1.14l.4.8c.12.22.18.33.28.4s.22.1.46.13l.89.14c.84.14 1.27.2 1.36.5.1.29-.2.6-.81 1.2l-.64.63c-.17.18-.26.27-.3.38-.03.12-.02.24.02.49l.14.88c.14.85.2 1.27-.04 1.45s-.63-.01-1.4-.4l-.8-.4c-.22-.12-.33-.18-.45-.18s-.23.06-.45.17l-.8.4c-.76.4-1.15.59-1.4.41-.24-.18-.18-.6-.04-1.45l.14-.88c.04-.25.06-.37.02-.49s-.13-.2-.3-.38l-.64-.63c-.6-.6-.9-.91-.81-1.2.1-.3.52-.36 1.36-.5l.89-.14c.25-.03.37-.05.47-.12.1-.08.15-.19.26-.4z'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
