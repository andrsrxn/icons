import type { Icon } from './types'

export const IconTouchpad: Icon = ({
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
      data-slot='icon-ui-touchpad'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.74 12h20.52c0 3.47 0 5.21-1 6.35l-.35.34c-1.13 1-2.87 1-6.35 1H9.44c-3.48 0-5.22 0-6.35-1l-.34-.34c-1-1.14-1-2.88-1-6.35'
        fill='currentColor'
      />
      <path
        d='M9.44 19.7h5.12c3.48 0 5.22 0 6.35-1.01l.34-.34c1-1.14 1-2.88 1-6.35v0c0-3.47 0-5.21-1-6.35l-.34-.34c-1.13-1-2.87-1-6.35-1H9.44c-3.48 0-5.22 0-6.35 1l-.34.34c-1 1.14-1 2.88-1 6.35v0c0 3.47 0 5.21 1 6.35l.34.34c1.13 1 2.87 1 6.35 1'
        stroke='currentColor'
      />
      <path d='M1.74 12h20.52' stroke='currentColor' />
      <path d='M12 19.7V12' stroke='currentColor' />
    </svg>
  )
}
