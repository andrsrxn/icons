import type { Icon } from './types'

export const IconCalendarEdit: Icon = ({
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
      data-slot='icon-ui-calendar-edit'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect opacity='.2' x='3.01' y='3.46' width='17.97' height='5.25' rx='1' fill='currentColor' />
      <path
        d='M20.98 11.05v-1.6c0-2.82 0-4.23-.88-5.11s-2.3-.88-5.12-.88H9c-2.83 0-4.25 0-5.12.88S3 6.64 3 9.46v5.97c0 2.83 0 4.24.88 5.12.87.88 2.29.88 5.12.88h1.48'
        stroke='currentColor'
      />
      <path d='M7.68 1.76v3.4' stroke='currentColor' />
      <path d='M16.36 1.76v3.4' stroke='currentColor' />
      <path d='M20.56 8.7H3.83' stroke='currentColor' />
      <path
        d='M16.23 22.45c.2 0 .3 0 .39-.04.09-.03.16-.1.3-.24l4.79-4.62c.47-.46.7-.68.77-.95a1 1 0 0 0 0-.5c-.06-.27-.3-.5-.75-.96-.46-.46-.69-.68-.96-.75a1 1 0 0 0-.49 0c-.27.07-.5.3-.95.77l-4.62 4.73c-.14.14-.2.21-.25.3-.03.1-.03.2-.03.4v.86c0 .47 0 .7.14.85s.39.15.86.15z'
        stroke='currentColor'
      />
      <path d='m20.93 18-2.07-2.06' stroke='currentColor' />
    </svg>
  )
}
