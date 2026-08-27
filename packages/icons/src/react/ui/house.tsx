import type { Icon } from './types'

export const IconHouse: Icon = ({
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
      data-slot='ui-icon-house'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M3.58 18.46c-.02.75-.04 1.12.16 1.4s.57.38 1.3.6l.98.28c1.15.32 1.72.49 2.12.2.4-.3.4-.9.43-2.08l.06-2.64c.02-.93.03-1.39.32-1.67s.76-.29 1.68-.29h1.4l1.3.02c.93.02 1.4.02 1.68.32.3.29.3.75.3 1.68v2.55c0 1.2 0 1.8.39 2.1s.97.14 2.13-.18l1.15-.31c.73-.2 1.1-.3 1.3-.58s.2-.66.17-1.42l-.28-8.54c-.01-.44-.02-.66-.12-.86s-.26-.33-.6-.61L13.3 3.36c-.6-.5-.9-.75-1.27-.75-.36 0-.66.25-1.27.75L4.62 8.43c-.34.28-.51.42-.61.61-.1.2-.1.42-.12.86z'
        fill='currentColor'
      />
      <path
        d='M9.53 21.35h4.94c2.83 0 4.25 0 5.12-.87.88-.88.88-2.3.88-5.13V12.1c0-1.28 0-1.93-.25-2.5s-.72-1.01-1.66-1.89l-2.47-2.3c-1.94-1.8-2.91-2.7-4.09-2.7s-2.15.9-4.09 2.7l-2.47 2.3c-.94.88-1.41 1.32-1.66 1.89s-.25 1.22-.25 2.5v3.25c0 2.83 0 4.25.88 5.13.87.87 2.29.87 5.12.87'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M15.26 21.15v-3.89c0-1.18 0-1.77-.24-2.21a2 2 0 0 0-.81-.81C13.76 14 13.18 14 12 14s-1.76 0-2.2.24a2 2 0 0 0-.82.81c-.24.44-.24 1.03-.24 2.21v3.89'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
