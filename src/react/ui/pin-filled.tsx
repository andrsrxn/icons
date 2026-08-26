import type { Icon } from './types'

export const IconPinFilled: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-pin-filled'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M5.69 16c-1.87-1.87-2.8-2.8-2.61-3.84.19-1.03 1.4-1.57 3.8-2.64l5.8-2.59.39-.18a2 2 0 0 0 .92-1.18l.09-.42a7 7 0 0 1 .28-1.24 2 2 0 0 1 2.88-.9c.2.12.45.36.94.86l1.93 1.93c.58.58.87.87 1.01 1.12a2 2 0 0 1-.76 2.7c-.24.14-.64.24-1.44.43l-.47.13a2 2 0 0 0-.99.8l-.22.43-2.8 5.82c-1.12 2.31-1.67 3.47-2.7 3.64-1.01.17-1.92-.73-3.73-2.55z'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path d='m2.75 21.25 3.86-3.86' stroke='currentColor' strokeWidth={strokeWidth} />
    </svg>
  )
}
