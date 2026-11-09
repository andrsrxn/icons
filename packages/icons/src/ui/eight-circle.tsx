import type { Icon } from './types'

export const IconEightCircle: Icon = ({
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
      data-slot='icon-ui-eight-circle'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle opacity='.2' cx='12' cy='12' r='10.22' fill='currentColor' />
      <circle cx='12' cy='12' r='10.22' stroke='currentColor' />
      <path
        d='M11.98 12.1c1.32.85 2.65 1.65 2.65 3s-1.35 2.33-2.72 2.25c-1.28-.07-2.4-.95-2.4-2.2 0-2 2.4-3.02 2.4-3.02zm0 0c-1.31-.83-2.61-1.71-2.61-3.21 0-1.32 1.2-2.25 2.54-2.25 1.35 0 2.7.93 2.7 2.25 0 1.96-2.23 3.03-2.63 3.21'
        stroke='currentColor'
      />
    </svg>
  )
}
