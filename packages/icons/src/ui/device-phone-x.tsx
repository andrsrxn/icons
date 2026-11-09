import type { Icon } from './types'

export const IconDevicePhoneX: Icon = ({
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
      data-slot='icon-ui-device-phone-x'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M12.26 22.25c-3.17 0-4.76 0-5.77-.95l-.15-.15c-.95-1-.95-2.6-.95-5.77V8.36c0-2.92 0-4.38.82-5.36q.2-.24.43-.43c.98-.82 2.44-.82 5.36-.82s4.38 0 5.36.82q.24.2.43.43c.82.98.82 2.44.82 5.36v7.9c0 1.03 0 1.54-.14 2.02q-.11.38-.3.73c-.25.43-.61.8-1.34 1.52-.72.7-1.08 1.06-1.5 1.29a4 4 0 0 1-.73.3c-.47.13-.97.13-1.98.13z'
        fill='currentColor'
      />
      <path
        d='M18.61 13.37V8.36c0-2.92 0-4.38-.82-5.36a4 4 0 0 0-.43-.43c-.98-.82-2.44-.82-5.36-.82s-4.38 0-5.36.82q-.24.2-.43.43c-.82.98-.82 2.44-.82 5.36v7.86c0 2.37 0 3.55.55 4.41q.42.66 1.07 1.07c.86.55 2.04.55 4.4.55'
        stroke='currentColor'
      />
      <path d='M14.56 5.16H9.44' stroke='currentColor' />
      <path d='m15.17 16.72 5.53 5.53' stroke='currentColor' />
      <path d='m15.17 22.25 5.53-5.53' stroke='currentColor' />
    </svg>
  )
}
