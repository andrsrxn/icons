import type { Icon } from './types'

export const IconFieldSparkle: Icon = ({
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
      data-slot='icon-ui-field-sparkle'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M22.3 7.09v3.4c0 3.78 0 5.66-1.17 6.83-1.17 1.18-3.05 1.18-6.82 1.18H8.19c-2.33 0-3.5 0-4.38-.47a4 4 0 0 1-1.64-1.65c-.48-.88-.48-2.05-.48-4.38s0-3.5.48-4.38A4 4 0 0 1 3.8 5.98c.9-.48 2.06-.48 4.4-.48h9.9l-2.04 1.72 1.76.96c.37.67 1.12 2.04 1.18 2.08s.65-1.25.95-1.9z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='M5.95 13.93h6.55' stroke='currentColor' />
      <path
        d='M12.25 5.5H8.2c-2.33 0-3.5 0-4.38.48a4 4 0 0 0-1.64 1.64C1.7 8.51 1.7 9.67 1.7 12s0 3.5.48 4.38a4 4 0 0 0 1.64 1.65c.88.47 2.05.47 4.38.47h7.7c2.25 0 3.38 0 4.24-.44a4 4 0 0 0 1.74-1.74c.44-.86.44-1.98.44-4.24'
        stroke='currentColor'
      />
      <path d='M18.8 3.85c0 1.77-1.9 3.7-3.68 3.7' stroke='currentColor' />
      <path d='M18.8 3.85c0 1.77 1.92 3.7 3.7 3.7' stroke='currentColor' />
      <path d='M18.8 11.23c0-1.74-1.91-3.69-3.68-3.69' stroke='currentColor' />
      <path d='M18.8 11.23c0-1.76 1.95-3.69 3.7-3.69' stroke='currentColor' />
    </svg>
  )
}
