import type { Icon } from './types'

export const IconDevicePhoneWifi: Icon = ({
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
      data-slot='icon-ui-device-phone-wifi'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M12 1.75c-2.92 0-4.38 0-5.36.82q-.24.2-.43.43c-.82.98-.82 2.44-.82 5.36v7.28c0 2.92 0 4.38.82 5.36q.2.24.43.43c.98.82 2.44.82 5.36.82s4.38 0 5.36-.82q.24-.2.43-.43c.82-.98.82-2.44.82-5.36V8.36c0-2.92 0-4.38-.82-5.36a4 4 0 0 0-.43-.43c-.98-.82-2.44-.82-5.36-.82'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M18.61 10.88V8.36c0-2.92 0-4.38-.82-5.36a4 4 0 0 0-.43-.43c-.98-.82-2.44-.82-5.36-.82s-4.38 0-5.36.82q-.24.2-.43.43c-.82.98-.82 2.44-.82 5.36v8.66c0 1.61 0 2.42.26 3.06a3.5 3.5 0 0 0 1.91 1.91c.64.26 1.45.26 3.06.26'
        stroke='currentColor'
      />
      <path d='M14.56 5.16H9.44' stroke='currentColor' />
      <path
        d='M17.43 21.88a.56.56 0 1 1-1.11 0 .56.56 0 0 1 1.1 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path d='M13.5 19.17a5.5 5.5 0 0 1 3.37-1.18c1.5 0 2.75.53 3.37 1.18' stroke='currentColor' />
      <path d='M11.42 16.56a8.6 8.6 0 0 1 5.44-2.03c2.42 0 4.1.9 5.44 2.03' stroke='currentColor' />
    </svg>
  )
}
