import type { Icon } from './types'

export const IconSignalHigh: Icon = ({
  size = 24,
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
      data-slot='signal-high'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M6.37 14.22 12.9 9.4c1.4-1.03 2.1-1.54 2.64-1.27.55.28.55 1.15.55 2.88v4.82c0 .94 0 1.41-.3 1.7-.29.3-.76.3-1.7.3H7.56c-2.52 0-3.77 0-4-.7-.22-.68.79-1.42 2.8-2.91'
        fill='currentColor'
      />
      <path
        d='m11.79 9.87-4.1 3.02-1.41 1.03c-1.71 1.26-2.57 1.9-2.69 2.44a1.5 1.5 0 0 0 .48 1.45c.42.38 1.49.38 3.61.38m0-5.3v5.3m0 0h4.1m0 0V9.87m0 8.32h4.11m-4.1-8.32 4.1-3.03m0 11.35H17c1.41 0 2.12 0 2.56-.44s.44-1.15.44-2.56V8.9c0-1.84 0-2.75-.45-3.2a1.5 1.5 0 0 0-.82-.4c-.61-.1-1.36.44-2.84 1.53m0 11.35V6.84'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
