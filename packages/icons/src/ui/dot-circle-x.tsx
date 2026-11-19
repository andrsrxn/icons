import type { Icon } from './types'

export const IconDotCircleX: Icon = ({
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
      data-slot='icon-ui-dot-circle-x'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle opacity='.2' cx='12' cy='12' r='10.22' fill='currentColor' />
      <path d='M12 22.22A10.22 10.22 0 1 1 22.22 12' stroke='currentColor' />
      <path
        d='M13.23 12a1.23 1.23 0 1 1-2.46 0 1.23 1.23 0 0 1 2.46 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path d='m16.1 16.1 6.12 6.12' stroke='currentColor' />
      <path d='m16.09 22.22 6.12-6.12' stroke='currentColor' />
    </svg>
  )
}
