import type { Icon } from './types'

export const IconAgent: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-agent'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect opacity='.2' x='3.8' y='7.11' width='16.4' height='12.76' rx='3' fill='currentColor' />
      <path d='M9.3 11.48v2.64' stroke='currentColor' />
      <path d='M14.95 11.48v2.64' stroke='currentColor' />
      <path d='M20.2 13.73h2.12' stroke='currentColor' />
      <path d='M1.67 13.73H3.8' stroke='currentColor' />
      <path
        d='M12.3 7.11c0-1.35 0-2.03-.32-2.52a2 2 0 0 0-.61-.6c-.5-.32-1.17-.32-2.52-.32h-.21'
        stroke='currentColor'
      />
      <rect x='3.8' y='7.11' width='16.4' height='12.76' rx='3' stroke='currentColor' />
    </svg>
  )
}
