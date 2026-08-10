import type { Icon } from './types'

export const IconAirplane: Icon = ({
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
      data-slot='airplane'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='m11.64 16.23 7.1-7.1c.27-.28.41-.42.5-.58l.09-.15c.07-.18.1-.37.17-.75.25-1.52.38-2.29.04-2.79a2 2 0 0 0-.38-.37c-.5-.35-1.27-.22-2.8.03-.37.07-.56.1-.74.17l-.15.08c-.16.1-.3.24-.57.51l-7.1 7.1c-.35.34-.52.52-.74.63s-.45.14-.94.21l-1.35.2-.1.02a1 1 0 0 0-.54.31l-.29.3a1 1 0 0 0 .34 1.47l.4.15 1.96.67c.47.16.7.24.86.4s.25.4.4.87l.61 1.9.1.27a1 1 0 0 0 1.53.37l.22-.2.05-.06a1 1 0 0 0 .25-.5v-.06l.23-1.44c.08-.48.12-.72.22-.93s.28-.39.63-.73'
        fill='currentColor'
      />
      <path
        d='M11.59 16.25c1.22-1.28 4-4.18 6.89-6.98 1.31-1.27 2.47-3.31 1.18-4.6-1.3-1.3-3.64-.5-4.95.78-2.67 2.61-5.6 5.57-6.9 6.9-.36.36-.53.54-.75.65-.22.12-.46.15-.96.23l-1.33.2-.1.01a1 1 0 0 0-.54.31l-.29.3a1 1 0 0 0 .34 1.47l.4.15 1.96.67c.47.16.7.24.86.4s.25.4.4.87l.61 1.9.1.27a1 1 0 0 0 1.53.37l.22-.2.05-.06a1 1 0 0 0 .25-.49v-.07l.24-1.49c.07-.46.1-.69.2-.9.11-.2.27-.36.59-.7Z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M12.36 7.4c-.7-1.13-2.34-1.7-4.03-1.99-1.94-.33-2.91-.49-3.23.2-.33.7.48 1.38 2.08 2.74l1.95 1.67m7.57 1.35c1.12.85 1.69 2.5 1.97 4.16.33 1.88.49 2.81-.2 3.14-.67.33-1.35-.43-2.7-1.96l-2.08-2.34'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
