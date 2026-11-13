import type { Icon } from './types'

export const IconReloadCircle: Icon = ({
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
      data-slot='icon-ui-reload-circle'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle opacity='.2' cx='12' cy='12' r='10.22' fill='currentColor' />
      <path d='M17.39 7.52v1c0 .94 0 1.4-.29 1.7-.29.28-.75.28-1.69.28h-1' stroke='currentColor' />
      <path
        d='M16 16a5.67 5.67 0 0 1-10.07-3.6 5.7 5.7 0 0 1 5.68-5.67c3.14 0 4.59 2.5 5.24 3.38'
        stroke='currentColor'
      />
      <circle cx='12' cy='12' r='10.22' stroke='currentColor' />
    </svg>
  )
}
