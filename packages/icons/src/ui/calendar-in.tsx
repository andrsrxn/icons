import type { Icon } from './types'

export const IconCalendarIn: Icon = ({
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
      data-slot='icon-ui-calendar-in'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect opacity='.2' x='3.01' y='3.46' width='17.97' height='5.25' rx='1' fill='currentColor' />
      <path
        d='M20.98 12.55v-3.1c0-2.82 0-4.23-.88-5.11s-2.3-.88-5.12-.88H9c-2.83 0-4.25 0-5.12.88S3 6.64 3 9.46v5.97c0 2.83 0 4.24.88 5.12.87.88 2.29.88 5.12.88h3.4'
        stroke='currentColor'
      />
      <path d='M7.68 1.76v3.4' stroke='currentColor' />
      <path d='M16.36 1.76v3.4' stroke='currentColor' />
      <path d='M20.56 8.7H3.83' stroke='currentColor' />
      <path
        d='m21.62 17.96-.3-.3c-1.34-1.34-2-2-2.83-2-.83-.01-1.5.66-2.84 2l-.3.3'
        stroke='currentColor'
      />
      <path d='M18.48 21.95v-5.88' stroke='currentColor' />
    </svg>
  )
}
