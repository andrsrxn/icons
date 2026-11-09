import type { Icon } from './types'

export const IconDeviceTabletOff: Icon = ({
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
      data-slot='icon-ui-device-tablet-off'
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
        d='M4.17 4.15c-.4 1.2-.4 2.9-.4 5.54v4.62c0 3.77 0 5.65 1.18 6.83C6.12 22.3 8 22.3 11.77 22.3h.46c3.77 0 5.65 0 6.82-1.17q.53-.53.78-1.3'
        stroke='currentColor'
      />
      <path
        d='M12.86 17.86a.86.86 0 1 1-1.72 0 .86.86 0 0 1 1.72 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path d='m2.74 2.74 18.52 18.52' stroke='currentColor' />
      <path
        d='M6.36 2.06c1.07-.37 2.64-.37 5.41-.37h.46c3.77 0 5.65 0 6.82 1.17 1.18 1.18 1.18 3.06 1.18 6.83v4.62c0 1.11-.03 1.72-.03 1.72'
        stroke='currentColor'
      />
    </svg>
  )
}
