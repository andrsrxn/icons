import type { Icon } from './types'

export const IconSave: Icon = ({
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
      data-slot='save'
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
        d='M4.55 5.3a1.6 1.6 0 1 1 3.19 0v.41a2 2 0 0 0 2 2h.08a2 2 0 0 0 2-2v-.2a1.81 1.81 0 0 1 3.14-1.24l3.38 3.57c.54.57.81.86.95 1.22.15.35.15.75.15 1.53v8.01a1.72 1.72 0 0 1-3.44 0v-1.29c0-.94 0-1.4-.15-1.78a2 2 0 0 0-1.08-1.07c-.37-.16-.84-.16-1.78-.16h-2.24c-.94 0-1.41 0-1.78.16a2 2 0 0 0-1.08 1.07c-.15.37-.15.84-.15 1.78v1.41a1.6 1.6 0 0 1-3.2 0z'
        fill='currentColor'
      />
      <path
        d='M7.63 20.14V18c0-1.89 0-2.83.58-3.41.6-.59 1.53-.59 3.42-.59h.74c1.89 0 2.83 0 3.42.59.58.58.58 1.52.58 3.41v2.14M12 4v1.81c0 .64 0 .96-.1 1.22-.15.4-.47.72-.87.87-.26.1-.58.1-1.22.1-.63 0-.95 0-1.2-.1a1.5 1.5 0 0 1-.89-.87c-.1-.26-.1-.58-.1-1.22V4m9.47 2.3L15.9 5a4 4 0 0 0-1.26-1.13c-.39-.17-.82-.17-1.7-.17h-4.4c-1.88 0-2.82 0-3.4.58-.6.6-.6 1.53-.6 3.42v8.62c0 1.89 0 2.83.6 3.41.58.59 1.52.59 3.4.59h6.9c1.88 0 2.82 0 3.41-.59.59-.58.59-1.52.59-3.41v-5.8c0-.72 0-1.09-.13-1.42a4 4 0 0 0-.83-1.17z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
    </svg>
  )
}
