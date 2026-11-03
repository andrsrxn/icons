import type { Icon } from './types'

export const IconToggleOff: Icon = ({
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
      data-slot='icon-ui-toggle-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M9.96 12a2.65 2.65 0 1 1-5.3 0 2.65 2.65 0 0 1 5.3 0'
        fill='currentColor'
      />
      <path d='M4.66 12a2.64 2.64 0 0 0 2.65 2.65A2.65 2.65 0 1 0 4.66 12' stroke='currentColor' />
      <path
        d='M22.25 12c0 2.9-2.35 5.26-5.26 5.26H7.01a5.26 5.26 0 0 1 0-10.52h9.98c2.9 0 5.26 2.35 5.26 5.26'
        stroke='currentColor'
      />
    </svg>
  )
}
