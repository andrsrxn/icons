import type { Icon } from './types'

export const IconHandGrabbing: Icon = ({
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
      data-slot='ui-icon-hand-grabbing'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M7.16 7.4v2.82C6.5 9.21 5.48 9.1 4.33 9.7c-1.68.86-1.69 3.03-1.06 4.23s.93 2.58 2.23 3.7c2.48 2.16 5.96 2.53 8.5 2.53s7.1-1.43 7.03-5.83v-5.6c0-1.17-.57-2.56-1.9-2.56-1.31 0-2.39.95-2.39 2.13 0-1.18-.58-4.18-2.4-4.18-2.03 0-2.39 2.1-2.39 3.28 0-1.17-1.07-2.12-2.4-2.12s-2.39.95-2.39 2.12'
        fill='currentColor'
      />
      <path
        d='M16.34 10.32V6.41a2.3 2.3 0 0 0-4.6 0v3.91'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M16.34 10.07V8.92a2.3 2.3 0 0 1 4.6 0v5.32c0 5.64-5.67 5.6-8.12 5.64-2.66.03-6.35-.26-8.84-4.33m7.77-5.33V7.16a2.3 2.3 0 0 0-4.6 0v5.03'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M6.58 9.08a2.67 2.67 0 0 0-3.24 1.72l-.1.3s-.67 2.28.9 4.71'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
