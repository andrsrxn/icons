import type { Icon } from './types'

export const IconHandReceivingX: Icon = ({
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
      data-slot='ui-icon-hand-receiving-x'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect opacity='.2' x='2.8' y='13.5' width='3.8' height='7.49' rx='1' fill='currentColor' />
      <path
        d='M6.6 19.73s1.09.86 2.65 1.21c3.13.72 4.72.52 7.5-.43 2.01-.7 3.6-2.55 4.4-3.65.39-.52.38-1.2.05-1.76a1.87 1.87 0 0 0-2.8-.41c-.98.82-2.26 1.82-3.52 2.55-.73.42-2.26.33-3.71.33m3.71-.33c.6-1.48.43-2.67-.23-2.9a11 11 0 0 0-3.8-.6c-3.55 0-4.25.83-4.25.83'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        x='2.8'
        y='13.5'
        width='3.8'
        height='7.49'
        rx='1'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m13.1 9.94 6.16-6.16m0 6.17-6.17-6.17'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
