import type { Icon } from './types'

export const IconTarget: Icon = ({
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
      data-slot='ui-icon-target'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M15.53 4.8c-.33.84-.01 2.1.2 2.78.1.3.36.52.67.58.69.12 1.93.26 2.73-.1a5 5 0 0 0 1.6-1.5.9.9 0 0 0-.15-1.21L18.3 3.2a.9.9 0 0 0-1.12-.11c-.58.38-1.38 1.01-1.65 1.7'
        fill='currentColor'
      />
      <path d='M12 6.57A5.43 5.43 0 1 0 17.41 12' stroke='currentColor' strokeWidth={strokeWidth} />
      <path d='M12 2.77A9.23 9.23 0 1 0 21.21 12' stroke='currentColor' strokeWidth={strokeWidth} />
      <path
        d='M13.4 12a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m15.91 8.08-2.83 2.84m2.45-6.12c-.26.67-.11 1.6.06 2.3.12.43.17.64.4.85s.46.23.91.28c.7.08 1.6.11 2.23-.17.4-.18.77-.53 1.1-.89.45-.5.67-.75.65-1.16s-.3-.67-.88-1.2l-1.18-1.1c-.51-.5-.77-.73-1.14-.75-.38-.01-.61.18-1.08.56-.44.36-.88.8-1.07 1.29'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
