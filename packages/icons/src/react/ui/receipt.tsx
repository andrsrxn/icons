import type { Icon } from './types'

export const IconReceipt: Icon = ({
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
      data-slot='ui-icon-receipt'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M16.94 20.42c1.3.84 3.03-.1 3.03-1.65V8.84c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88h-3.94c-2.82 0-4.24 0-5.12.88s-.88 2.3-.88 5.12v9.96c0 1.53 1.7 2.45 2.98 1.61a1.9 1.9 0 0 1 1.94-.1l1.17.6c.48.26.72.38.96.46a3 3 0 0 0 1.84-.01c.24-.08.48-.2.96-.46l1.08-.57c.63-.33 1.38-.3 1.98.09'
        fill='currentColor'
      />
      <path
        d='M16.92 20.27c1.3.9 1.94 1.34 2.46 1.1l.1-.05c.49-.3.49-1.08.49-2.65V8.84c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88h-3.94c-2.82 0-4.24 0-5.12.88s-.88 2.3-.88 5.12v9.89c0 1.48 0 2.23.44 2.53l.22.11c.5.18 1.1-.25 2.32-1.1.4-.3.61-.44.85-.48l.12-.01c.24 0 .47.1.92.32l2.23 1.06c.43.2.64.3.87.3s.44-.1.87-.3l2.1-1.04c.47-.23.72-.35.97-.34H16c.25.03.48.18.92.49M7.9 11.45h8.33M7.9 7.57h8.33m-8.46 7.74H13'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
