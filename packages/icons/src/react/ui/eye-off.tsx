import type { Icon } from './types'

export const IconEyeOff: Icon = ({
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
      data-slot='ui-icon-eye-off'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path d='m3.3 3.3 17.4 17.4' stroke='currentColor' strokeWidth={strokeWidth} />
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 5.85c-4.83 0-7.67 3.64-8.72 5.31-.31.5-.32 1.13 0 1.64 1.03 1.68 3.86 5.35 8.72 5.35s7.7-3.67 8.73-5.35c.32-.51.31-1.13 0-1.64-1.05-1.67-3.9-5.3-8.73-5.3m.02 8.7a2.58 2.58 0 1 0 0-5.15 2.58 2.58 0 0 0 0 5.16'
        fill='currentColor'
      />
      <path
        d='M12 5.85c-4.37 0-7.21 2.65-8.64 4.47-.51.65-.77.97-.77 1.66s.25 1.02.75 1.67c1.42 1.83 4.25 4.5 8.66 4.5s7.24-2.67 8.66-4.5c.5-.65.76-.98.75-1.67 0-.69-.26-1.01-.77-1.66C19.21 8.5 16.37 5.85 12 5.85'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <circle cx='12.01' cy='11.98' r='3.22' stroke='currentColor' strokeWidth={strokeWidth} />
    </svg>
  )
}
