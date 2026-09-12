import type { Icon } from './types'

export const IconCrane: Icon = ({
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
      data-slot='icon-ui-crane'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect opacity='.2' x='6.57' y='3.13' width='5.38' height='15.48' rx='2' fill='currentColor' />
      <path
        d='M11.95 18.2V5.84c0-.65 0-.97-.07-1.23a2 2 0 0 0-1.4-1.4c-.26-.07-.58-.07-1.22-.07-.65 0-.97 0-1.23.08A2 2 0 0 0 6.64 4.6c-.07.26-.07.58-.07 1.23V18.2'
        stroke='currentColor'
      />
      <rect x='5.01' y='18.21' width='8.49' height='2.99' rx='1' stroke='currentColor' />
      <path
        d='m10.76 3.28 8.5 3.05c2.07.74 3.1 1.1 3.03 1.52s-1.17.42-3.37.42H11.9'
        stroke='currentColor'
      />
      <path
        d='m7.22 3.62-4 2.83c-1.06.75-1.58 1.12-1.47 1.47.1.35.75.35 2.05.35h3.52'
        stroke='currentColor'
      />
      <path
        d='M17.76 8.6v1.98c0 .55.48.98.95 1.28a1.75 1.75 0 1 1-2.7 1.47'
        stroke='currentColor'
      />
      <path d='M11.95 8.27H7.12' stroke='currentColor' />
      <path d='M11.95 13.37H7.12' stroke='currentColor' />
    </svg>
  )
}
