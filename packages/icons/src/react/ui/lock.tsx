import type { Icon } from './types'

export const IconLock: Icon = ({
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
      data-slot='icon-ui-lock'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='3.32'
        y='9.25'
        width='17.36'
        height='12.95'
        rx='3'
        fill='currentColor'
      />
      <rect x='3.32' y='9.25' width='17.36' height='12.95' rx='3' stroke='currentColor' />
      <path d='m16.4 9.25-.42-4A3.96 3.96 0 0 0 8.1 5.2l-.47 4.04' stroke='currentColor' />
      <path
        d='M13.11 15.44a1.11 1.11 0 1 1-2.22 0 1.11 1.11 0 0 1 2.22 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
