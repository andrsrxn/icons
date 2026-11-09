import type { Icon } from './types'

export const IconTextBold: Icon = ({
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
      data-slot='icon-ui-text-bold'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M10.04 3.7h2.61a3.83 3.83 0 0 1 3.84 3.83c0 2.11-1.3 3.83-4.74 3.83h1.44a4.47 4.47 0 0 1 0 8.95h-2.94m.06-.02c-1.24 0-1.86 0-2.3-.3a2 2 0 0 1-.42-.42c-.3-.44-.3-1.06-.3-2.3V6.72c0-1.24 0-1.86.3-2.3q.17-.24.42-.42c.44-.3 1.06-.3 2.3-.3'
        stroke='currentColor'
      />
    </svg>
  )
}
