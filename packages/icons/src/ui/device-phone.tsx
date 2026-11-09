import type { Icon } from './types'

export const IconDevicePhone: Icon = ({
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
      data-slot='icon-ui-device-phone'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M12 22.25c-2.92 0-4.38 0-5.36-.82a4 4 0 0 1-.43-.43c-.82-.98-.82-2.44-.82-5.36V8.36c0-2.92 0-4.38.82-5.36q.2-.24.43-.43c.98-.82 2.44-.82 5.36-.82s4.38 0 5.36.82q.24.2.43.43c.82.98.82 2.44.82 5.36v7.28c0 2.92 0 4.38-.82 5.36q-.2.24-.43.43c-.98.82-2.44.82-5.36.82'
        fill='currentColor'
      />
      <path
        d='M18.61 15.64V8.36c0-2.92 0-4.38-.82-5.36a4 4 0 0 0-.43-.43c-.98-.82-2.44-.82-5.36-.82v0c-2.92 0-4.38 0-5.36.82q-.24.2-.43.43c-.82.98-.82 2.44-.82 5.36v7.28c0 2.92 0 4.38.82 5.36q.2.24.43.43c.98.82 2.44.82 5.36.82v0c2.92 0 4.38 0 5.36-.82q.24-.2.43-.43c.82-.98.82-2.44.82-5.36'
        stroke='currentColor'
      />
      <path d='M14.56 5.16H9.44' stroke='currentColor' />
    </svg>
  )
}
