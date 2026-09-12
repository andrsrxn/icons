import type { Icon } from './types'

export const IconCombine: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-combine'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect opacity='.2' x='2.53' y='2.53' width='8.32' height='8.32' rx='2' fill='currentColor' />
      <rect
        opacity='.2'
        x='13.15'
        y='13.15'
        width='8.32'
        height='8.32'
        rx='2'
        fill='currentColor'
      />
      <rect x='2.53' y='2.53' width='8.32' height='8.32' rx='2' stroke='currentColor' />
      <path
        d='M14.06 3.14h.12a2 2 0 0 1 1.95 2.06v3.1a2 2 0 0 1-1.95 1.95h-.12'
        stroke='currentColor'
      />
      <path
        d='M18.92 3.14h.12a2 2 0 0 1 1.94 1.94V8.3a2 2 0 0 1-1.94 1.95h-.12'
        stroke='currentColor'
      />
      <rect x='13.15' y='13.15' width='8.32' height='8.32' rx='2' stroke='currentColor' />
      <path
        d='M9.26 18.11h-1c-1.88 0-2.83 0-3.41-.58-.59-.59-.59-1.53-.59-3.42v-.23'
        stroke='currentColor'
      />
      <path
        d='M7.98 20.73c1.07-1.07 1.61-1.6 1.7-2.26a2 2 0 0 0 0-.6c-.09-.65-.63-1.18-1.7-2.26'
        stroke='currentColor'
      />
    </svg>
  )
}
