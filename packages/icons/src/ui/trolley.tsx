import type { Icon } from './types'

export const IconTrolley: Icon = ({
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
      data-slot='icon-ui-trolley'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='8.46'
        y='3.65'
        width='10.64'
        height='10.64'
        rx='2'
        fill='currentColor'
      />
      <path
        d='m4.12 5.95.84 6.14c.33 2.47.5 3.7 1.35 4.45.85.74 2.1.74 4.6.74h10.25'
        stroke='currentColor'
      />
      <path d='M4.6 9.25 3.94 4.9a2.45 2.45 0 0 0-2.42-2.1' stroke='currentColor' />
      <circle
        cx='8.25'
        cy='19.11'
        r='1.83'
        transform='rotate(90 8.25 19.11)'
        stroke='currentColor'
      />
      <circle
        cx='17.27'
        cy='19.11'
        r='1.83'
        transform='rotate(90 17.27 19.11)'
        stroke='currentColor'
      />
      <rect x='8.46' y='3.65' width='10.64' height='10.64' rx='2' stroke='currentColor' />
      <path d='M13.78 3.65v4.18' stroke='currentColor' />
    </svg>
  )
}
