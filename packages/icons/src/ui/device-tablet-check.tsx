import type { Icon } from './types'

export const IconDeviceTabletCheck: Icon = ({
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
      data-slot='icon-ui-device-tablet-check'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M11.77 22.3c-3.77 0-5.65 0-6.82-1.16-1.18-1.18-1.18-3.06-1.18-6.83V9.69c0-3.77 0-5.65 1.18-6.83C6.12 1.7 8 1.7 11.77 1.7h.46c3.77 0 5.65 0 6.82 1.17 1.18 1.18 1.18 3.06 1.18 6.83v4.62c0 3.77 0 5.65-1.18 6.83-1.17 1.17-3.05 1.17-6.82 1.17z'
        fill='currentColor'
      />
      <path
        d='M20.23 10.6v3.7c0 3.78 0 5.66-1.18 6.84-1.17 1.17-3.05 1.17-6.82 1.17h-.46c-3.77 0-5.65 0-6.82-1.17-1.18-1.18-1.18-3.06-1.18-6.83V9.69c0-3.77 0-5.65 1.18-6.83C6.12 1.7 8 1.7 11.77 1.7h.24'
        stroke='currentColor'
      />
      <path
        d='M12.86 17.86a.86.86 0 1 1-1.72 0 .86.86 0 0 1 1.72 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='m14.82 4.62.59.72h0c.72.87 1.07 1.31 1.55 1.31.47 0 .83-.44 1.54-1.31l2.98-3.65'
        stroke='currentColor'
      />
    </svg>
  )
}
