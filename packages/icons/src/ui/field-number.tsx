import type { Icon } from './types'

export const IconFieldNumber: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-field-number'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M15.77 18.54c2.85 0 4.28 0 5.24-.79q.29-.22.51-.51c.79-.96.79-2.39.79-5.24s0-4.28-.79-5.24a4 4 0 0 0-.51-.51c-.96-.79-2.39-.79-5.24-.79H8.23c-2.85 0-4.28 0-5.24.79a4 4 0 0 0-.51.51c-.79.96-.79 2.39-.79 5.24s0 4.28.79 5.24q.22.29.51.51c.96.79 2.39.79 5.24.79z'
        fill='currentColor'
      />
      <path
        d='M1.7 12c0-2.85 0-4.28.78-5.24q.23-.29.51-.51c.96-.79 2.39-.79 5.24-.79h7.54c2.85 0 4.28 0 5.24.79q.29.22.51.51c.79.96.79 2.39.79 5.24v0c0 2.85 0 4.28-.79 5.24a4 4 0 0 1-.51.51c-.96.79-2.39.79-5.24.79H8.23c-2.85 0-4.28 0-5.24-.79a4 4 0 0 1-.51-.51c-.79-.96-.79-2.39-.79-5.24'
        stroke='currentColor'
      />
      <path
        d='m4.7 10.2.31-.19c.68-.43 1.02-.65 1.28-.5.26.14.26.54.26 1.34v4.12'
        stroke='currentColor'
      />
      <path
        d='M16.03 14.25c.63 1.04 2.94 1.11 2.94-.86 0-1-.76-1.28-1.58-1.3.73-.01 1.4-.36 1.4-1.3 0-1.85-2.17-1.78-2.76-.8'
        stroke='currentColor'
      />
      <path
        d='M9.95 10c.6-1 2.79-1.06 2.79.8 0 1.1-1.17 1.72-2.14 2.83-.4.46-.6.7-.47.99s.48.3 1.18.3h1.5'
        stroke='currentColor'
      />
    </svg>
  )
}
