import type { Icon } from './types'

export const IconSignOut: Icon = ({
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
      data-slot='ui-icon-sign-out'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M9.9 7.56c0-1.51 0-2.27.43-2.8.43-.55 1.16-.73 2.62-1.09l1.94-.48c2.28-.55 3.42-.83 4.19-.23s.77 1.77.77 4.12v10.13c0 2.23 0 3.34-.73 3.94-.72.6-1.81.4-4-.01l-1.95-.36c-1.56-.3-2.34-.44-2.8-1-.47-.55-.47-1.34-.47-2.93z'
        fill='currentColor'
      />
      <path
        d='m6.13 8.63-.54.54c-1.33 1.33-2 2-2 2.83s.67 1.5 2 2.83l.54.54M13.84 12H3.96M9.9 7.22c0-.8 0-1.18.08-1.52a3 3 0 0 1 1.7-2.05c.31-.14.7-.22 1.47-.37l.78-.15c2.15-.42 3.22-.62 4.05-.29a3 3 0 0 1 1.38 1.14c.49.75.49 1.84.49 4.03v8.28c0 2.09 0 3.14-.47 3.87a3 3 0 0 1-1.3 1.14c-.8.35-1.84.2-3.9-.1l-.92-.12c-.73-.1-1.1-.16-1.4-.27a3 3 0 0 1-1.89-2.17c-.07-.32-.07-.69-.07-1.43'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
