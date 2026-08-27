import type { Icon } from './types'

export const IconMicrophoneFilled: Icon = ({
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
      data-slot='ui-icon-microphone-filled'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M12 14.65a3.77 3.77 0 0 0 3.78-3.77V6.3a3.78 3.78 0 0 0-7.56 0v4.57c0 2.08 1.7 3.77 3.78 3.77'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M12.12 17.52v3.95m2.4 0h-4.8M18.46 9v1.94a6.46 6.46 0 0 1-12.92 0V9'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
