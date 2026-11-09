import type { Icon } from './types'

export const IconSlidesStart: Icon = ({
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
      data-slot='icon-ui-slides-start'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M7.71 20.43c-2.83 0-4.24 0-5.12-.87-.88-.88-.88-2.3-.88-5.13V9.57c0-2.83 0-4.25.88-5.13s2.3-.87 5.12-.87h1.21c2.83 0 4.24 0 5.12.87.88.88.88 2.3.88 5.13v4.86c0 2.83 0 4.25-.88 5.13s-2.3.87-5.12.87z'
        fill='currentColor'
      />
      <path
        d='M14.92 14.43V9.57c0-2.83 0-4.25-.88-5.13s-2.3-.87-5.12-.87h-1.2c-2.84 0-4.25 0-5.13.87-.88.88-.88 2.3-.88 5.13v4.86c0 2.83 0 4.25.88 5.13s2.3.87 5.12.87h1.21c2.83 0 4.24 0 5.12-.87.88-.88.88-2.3.88-5.13'
        stroke='currentColor'
      />
      <path d='M22.23 18.66V5.34' stroke='currentColor' />
      <path d='M18.34 18.66V5.34' stroke='currentColor' />
    </svg>
  )
}
