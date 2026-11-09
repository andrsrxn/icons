import type { Icon } from './types'

export const IconDeviceTabletWarning: Icon = ({
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
      data-slot='icon-ui-device-tablet-warning'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M11.77 1.7c-3.77 0-5.65 0-6.82 1.16C3.77 4.04 3.77 5.92 3.77 9.7v4.62c0 3.77 0 5.65 1.18 6.83C6.12 22.3 8 22.3 11.77 22.3h.46c3.77 0 5.65 0 6.82-1.17 1.18-1.18 1.18-3.06 1.18-6.83V9.69c0-3.77 0-5.65-1.18-6.83C17.88 1.7 16 1.7 12.23 1.7z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M20.23 11.2v3.1c0 3.78 0 5.66-1.18 6.84-1.17 1.17-3.05 1.17-6.82 1.17h-.46c-3.77 0-5.65 0-6.82-1.17-1.18-1.18-1.18-3.06-1.18-6.83V9.69c0-3.77 0-5.65 1.18-6.83C6.12 1.7 8.03 1.7 11.85 1.7'
        stroke='currentColor'
      />
      <path
        d='M12.86 17.86a.86.86 0 1 1-1.72 0 .86.86 0 0 1 1.72 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path d='M16.51 5.53V1.27' stroke='currentColor' />
      <path
        d='M16.98 8.84a.47.47 0 1 1-.94 0 .47.47 0 0 1 .94 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
