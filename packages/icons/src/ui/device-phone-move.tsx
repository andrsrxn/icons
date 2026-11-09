import type { Icon } from './types'

export const IconDevicePhoneMove: Icon = ({
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
      data-slot='icon-ui-device-phone-move'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M12 1.75c-2.92 0-4.38 0-5.36.82q-.24.2-.43.43c-.82.98-.82 2.44-.82 5.36v6.9c0 3.3 0 4.94 1.03 5.97 1.02 1.02 2.67 1.02 5.97 1.02h3.41a3.5 3.5 0 0 0 2.96-1.66l.1-.16c.6-.96.64-2.17.12-3.17a3 3 0 0 1-.37-1.49V8.36c0-2.92 0-4.38-.82-5.36a4 4 0 0 0-.43-.43c-.98-.82-2.44-.82-5.36-.82'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M18.61 12.49V8.36c0-2.92 0-4.38-.82-5.36a4 4 0 0 0-.43-.43c-.98-.82-2.44-.82-5.36-.82s-4.38 0-5.36.82q-.24.2-.43.43c-.82.98-.82 2.44-.82 5.36v8.66c0 1.61 0 2.42.26 3.06a3.5 3.5 0 0 0 1.91 1.91c.64.26 1.45.26 3.06.26'
        stroke='currentColor'
      />
      <path d='M14.56 5.16H9.44' stroke='currentColor' />
      <path d='m17.66 16.54.1.1c1.34 1.33 2 2 2 2.83s-.66 1.5-2 2.83l-.1.1' stroke='currentColor' />
      <path d='M13.37 19.47h6.12' stroke='currentColor' />
    </svg>
  )
}
