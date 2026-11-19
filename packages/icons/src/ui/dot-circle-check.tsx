import type { Icon } from './types'

export const IconDotCircleCheck: Icon = ({
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
      data-slot='icon-ui-dot-circle-check'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle opacity='.2' cx='12' cy='12' r='10.22' fill='currentColor' />
      <path d='M22.22 12a10.22 10.22 0 1 0-11.66 10.12' stroke='currentColor' />
      <path
        d='M13.23 12a1.23 1.23 0 1 1-2.46 0 1.23 1.23 0 0 1 2.46 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='m13.73 19.77 1.06 1.3c.72.88 1.08 1.32 1.55 1.32.48 0 .84-.45 1.55-1.33l3.97-4.9'
        stroke='currentColor'
      />
    </svg>
  )
}
