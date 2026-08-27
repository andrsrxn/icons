import type { Icon } from './types'

export const IconFilter: Icon = ({
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
      data-slot='ui-icon-filter'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M7.31 11.91 3.45 8.05a4 4 0 0 1-.55-.61 2 2 0 0 1-.3-.7c-.03-.2-.03-.41-.03-.83 0-.95 0-1.43.16-1.8a2 2 0 0 1 1.05-1.06c.38-.16.86-.16 1.81-.16h12.46c.95 0 1.43 0 1.8.16a2 2 0 0 1 1.06 1.05c.16.38.16.86.16 1.81 0 .42 0 .63-.04.83a2 2 0 0 1-.29.7c-.1.17-.26.32-.55.61l-3.86 3.86c-.58.58-.87.87-1.02 1.23-.15.37-.15.78-.15 1.6v1.81c0 .61 0 .92-.09 1.2a2 2 0 0 1-.24.52c-.16.25-.4.44-.86.83-1.87 1.58-2.8 2.37-3.6 2.33a2 2 0 0 1-1.34-.62c-.55-.58-.55-1.8-.55-4.26v-1.81c0-.82 0-1.23-.15-1.6a4 4 0 0 0-1.02-1.23'
        fill='currentColor'
      />
      <path
        d='M7.31 11.91 3.45 8.05a4 4 0 0 1-.55-.61 2 2 0 0 1-.3-.7c-.03-.2-.03-.41-.03-.83 0-.95 0-1.43.16-1.8a2 2 0 0 1 1.05-1.06c.38-.16.86-.16 1.81-.16h12.46c.95 0 1.43 0 1.8.16a2 2 0 0 1 1.06 1.05c.16.38.16.86.16 1.81 0 .42 0 .63-.04.83a2 2 0 0 1-.29.7c-.1.17-.26.32-.55.61l-3.86 3.86c-.58.58-.87.87-1.02 1.23-.15.37-.15.78-.15 1.6v1.81c0 .61 0 .92-.09 1.2a2 2 0 0 1-.24.52c-.16.25-.4.44-.86.83h0c-1.87 1.58-2.8 2.37-3.6 2.33a2 2 0 0 1-1.34-.62c-.55-.58-.55-1.8-.55-4.26v-1.81c0-.82 0-1.23-.15-1.6a4 4 0 0 0-1.02-1.23'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
