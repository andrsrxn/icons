import type { Icon } from './types'

export const IconSignIn: Icon = ({
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
      data-slot='ui-icon-sign-in'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M8.83 7.63c0-1.54 0-2.31.44-2.86s1.2-.71 2.7-1.05l3.01-.66c2.25-.5 3.37-.75 4.12-.15s.75 1.75.75 4.05V17.3c0 2.2 0 3.3-.71 3.9-.71.59-1.8.4-3.96.05l-3-.5c-1.6-.28-2.4-.41-2.87-.97s-.48-1.37-.48-2.98z'
        fill='currentColor'
      />
      <path
        d='m12.63 8.54.63.63c1.33 1.33 2 2 2 2.83s-.67 1.5-2 2.83l-.63.63M3.65 12h11.2'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M8.83 7.22c0-.75 0-1.12.07-1.44a3 3 0 0 1 1.79-2.12c.3-.13.67-.2 1.4-.32l1.3-.23c2.71-.47 4.06-.7 5.04-.1a3 3 0 0 1 .65.55c.77.85.77 2.23.77 4.98v7.22c0 2.64 0 3.96-.73 4.8a3 3 0 0 1-.63.55c-.92.61-2.23.45-4.85.1l-1.44-.18c-.7-.09-1.06-.13-1.35-.23a3 3 0 0 1-1.95-2.22c-.07-.3-.07-.66-.07-1.37'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
