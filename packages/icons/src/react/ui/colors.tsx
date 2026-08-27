import type { Icon } from './types'

export const IconColors: Icon = ({
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
      data-slot='ui-icon-colors'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M17.2 8.3c0 2.82-2.28 4.56-5.1 4.56-2.46-1.27-5.08-1.74-5.08-4.55a5.09 5.09 0 1 1 10.17 0'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M21.44 15.82a5.1 5.1 0 0 1-5.1 5.1c-2.8 0-4.16-1.9-4.16-4.72 0-2.8 1.73-4.08 4.17-5.46a5.1 5.1 0 0 1 5.09 5.08'
        fill='currentColor'
      />
      <circle cx='7.65' cy='15.82' r='5.09' stroke='currentColor' strokeWidth={strokeWidth} />
      <path
        d='M16.35 10.74a5.09 5.09 0 1 1-4.2 7.96M7.2 10.42a5.08 5.08 0 1 1 4.98 2.88'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
