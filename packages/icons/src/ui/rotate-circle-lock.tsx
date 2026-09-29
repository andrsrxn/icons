import type { Icon } from './types'

export const IconRotateCircleLock: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-rotate-circle-lock'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 22.31a8.97 8.97 0 1 1 0-17.94 8.97 8.97 0 0 1 0 17.94m3.4-9.43v4.82H8.65v-4.82z'
        fill='currentColor'
      />
      <path
        d='M12.18 4.74c5.75-.24 8.8 3.64 8.8 8.6A8.97 8.97 0 1 1 6.74 6.06'
        stroke='currentColor'
      />
      <rect x='8.72' y='13.13' width='6.57' height='4.9' rx='1' stroke='currentColor' />
      <path d='m13.85 13.14-.16-1.38a1.67 1.67 0 0 0-3.32-.02l-.18 1.4' stroke='currentColor' />
      <path
        d='m14.64 1.7-2.02 1.65c-.8.65-1.19.98-1.21 1.42s.33.8 1.06 1.54l1.83 1.86'
        stroke='currentColor'
      />
    </svg>
  )
}
