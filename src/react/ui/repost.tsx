import type { Icon } from './types'

export const IconRepost: Icon = ({
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
      data-slot='ui-icon-repost'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M4.42 5.8H14.7c1.87 0 2.8 0 3.5.4a3 3 0 0 1 1.1 1.1c.4.7.4 1.63.4 3.5m0 7.4H9.4c-1.85 0-2.78 0-3.47-.4a3 3 0 0 1-1.12-1.1c-.39-.7-.39-1.63-.39-3.48'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m6.37 2.2-.76.76c-1.33 1.34-2 2-2 2.83s.67 1.5 2 2.83l.76.76M17.7 21.8l.75-.76c1.33-1.34 2-2 2-2.83s-.66-1.5-2-2.83l-.76-.76'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
