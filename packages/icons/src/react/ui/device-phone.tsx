import type { Icon } from './types'

export const IconDevicePhone: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-device-phone'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={isLabelled && title && !ariaLabel ? 'device-phone-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`ui-icon ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? <title id={'device-phone-title'}>{title}</title> : null}<rect opacity=".2" x="6" y="21.3" width="18.61" height="12" rx="3" transform="rotate(-90 6 21.3)" fill="currentColor"/><rect x="6" y="21.3" width="18.61" height="12" rx="3" transform="rotate(-90 6 21.3)" stroke="currentColor"/><path d="M14.32 5.79H9.68" stroke="currentColor"/></svg>
  )
}
