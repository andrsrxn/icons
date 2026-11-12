import type { Icon } from './types'

export const IconWhistle: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-whistle'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M16.18 12.5a7.25 7.25 0 1 1-7.25-7.25c1.57 0 11.66-.4 12.85.45.75.54.43 4.49.43 4.49z'
        fill='currentColor'
      />
      <path d='M16.18 12.5a7.25 7.25 0 1 1-7.25-7.25' stroke='currentColor' />
      <path
        d='M8.89 5.25h10.33c.97 0 1.45 0 1.83.17a2 2 0 0 1 1.04 1.04c.17.38.17.86.17 1.83 0 .71 0 1.07-.1 1.38a2 2 0 0 1-.7.96c-.27.2-.6.31-1.28.54l-4 1.32'
        stroke='currentColor'
      />
      <path d='M9.1 5.31v4.92' stroke='currentColor' />
    </svg>
  )
}
