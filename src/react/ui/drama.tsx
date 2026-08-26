import type { Icon } from './types'

export const IconDrama: Icon = ({
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
      data-slot='ui-icon-drama'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M14.02 16.15c4.17.62 7.05-5.5 7.54-8.79.32-2.17-.9-2.04-2.7-1.85-.91.1-1.98.2-3.08.04s-2.09-.58-2.93-.94c-1.68-.7-2.8-1.18-3.12 1-.12.8-.16 1.8-.1 2.86 0 0 3.71-2.12 4.4-.68 1.07 1.83 0 8.36 0 8.36'
        fill='currentColor'
      />
      <path
        d='M2.44 10.72c.49 3.28 3.2 9.5 7.36 8.89 4.17-.62 4.95-7.36 4.47-10.64s-2.79-.54-6.05-.06c-3.27.49-6.26-1.47-5.78 1.8'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M9.72 8.3c-.08-1-.07-1.93.02-2.68.38-3.3 2.76-.63 6.04-.25 3.28.37 6.21-1.68 5.83 1.61s-2.88 9.61-7.06 9.13q-.39-.04-.73-.16m-2.47-4.42-1.23.2m8.03-3.03-1.27-.12m-9.94 3.61-1.1.16m4.82 2.9c-.45.4-.8.56-1.4.64-.6.1-.99.04-1.54-.2'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M16.43 12.64a2.5 2.5 0 0 0-1.4-.7c-.31-.05-.31-.03-.57 0'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
