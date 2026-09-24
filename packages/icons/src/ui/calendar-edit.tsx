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
        d='M20.98 10.76v-1.3c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88H9c-2.83 0-4.25 0-5.12.88S3 6.64 3 9.46v5.97c0 2.83 0 4.24.88 5.12.87.88 2.29.88 5.12.88h.95'
        stroke='currentColor'
      />
      <path d='M7.68 1.76v3.4' stroke='currentColor' />
      <path d='M16.36 1.76v3.4' stroke='currentColor' />
      <path d='M20.56 8.7H3.83' stroke='currentColor' />
      <rect
        opacity='.2'
        width='2.36'
        height='2.64'
        rx='1'
        transform='scale(1 -1)rotate(45 31.33 16.1)'
        fill='currentColor'
      />
      <path d='m20.56 17.45-1.78-1.78' stroke='currentColor' />
      <path
        d='M15.13 22.2c.54-.11.82-.17 1.06-.3l.03-.02c.24-.13.44-.33.84-.72l4.54-4.45c.31-.31.47-.46.55-.63a1 1 0 0 0 0-.82 3 3 0 0 0-.54-.64 3 3 0 0 0-.63-.54 1 1 0 0 0-.81 0 3 3 0 0 0-.64.54l-4.51 4.5a4 4 0 0 0-.75.87c-.13.24-.19.51-.3 1.05-.15.65-.22.97-.05 1.17l.04.03c.19.17.51.1 1.17-.04'
        stroke='currentColor'
      />
    </svg>
  )
}
