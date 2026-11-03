import type { Icon } from './types'

export const IconListOutdent: Icon = ({
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
      data-slot='icon-ui-list-outdent'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M10 17.85h11.26' stroke='currentColor' />
      <path d='M10 11.98h11.26' stroke='currentColor' />
      <path d='M10 6.1h11.26' stroke='currentColor' />
      <path
        d='m6.97 9.45-1.62.72c-1.74.79-2.62 1.18-2.62 1.83s.87 1.04 2.62 1.82l1.62.73'
        stroke='currentColor'
      />
    </svg>
  )
}
