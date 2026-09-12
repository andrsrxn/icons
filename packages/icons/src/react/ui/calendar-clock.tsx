import type { Icon } from './types'

export const IconCalendarClock: Icon = ({
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
      data-slot='icon-ui-calendar-clock'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle opacity='.2' cx='18.29' cy='18.27' r='3.98' fill='currentColor' />
      <rect opacity='.2' x='3.01' y='3.46' width='17.97' height='5.25' rx='1' fill='currentColor' />
      <circle cx='18.29' cy='18.27' r='3.98' stroke='currentColor' />
      <path
        d='m19.32 19.15-.66-.44c-.22-.15-.33-.22-.39-.33s-.06-.24-.06-.5v-.97'
        stroke='currentColor'
      />
      <path
        d='M21 11.85v-2.4c-.01-2.83-.02-4.24-.9-5.11-.87-.88-2.28-.88-5.1-.88H9c-2.82 0-4.24 0-5.11.88S3 6.64 3 9.46v5.97c0 2.83 0 4.24.88 5.12.87.88 2.29.88 5.12.88h2.68'
        stroke='currentColor'
      />
      <path d='M7.68 1.76v3.4' stroke='currentColor' />
      <path d='M16.36 1.76v3.4' stroke='currentColor' />
      <path d='M20.56 8.7H3.83' stroke='currentColor' />
    </svg>
  )
}
