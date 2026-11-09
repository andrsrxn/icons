import type { Icon } from './types'

export const IconDevicePhoneIn: Icon = ({
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
      data-slot='icon-ui-device-phone-in'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M12 1.75c-2.92 0-4.38 0-5.36.82q-.24.2-.43.43c-.82.98-.82 2.44-.82 5.36v8.3c0 1.95 0 2.92.38 3.67.33.67.87 1.2 1.54 1.54.75.38 1.72.38 3.66.38h3.32a2.27 2.27 0 0 0 2.27-2.27v-2.67a.7.7 0 0 1 1.02-.6.7.7 0 0 0 1.03-.6V7.5c0-2.11 0-3.17-.44-3.97a3.5 3.5 0 0 0-1.35-1.35c-.8-.44-1.86-.44-3.98-.44z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M18.61 11.94V8.36c0-2.92 0-4.38-.82-5.36a4 4 0 0 0-.43-.43c-.98-.82-2.44-.82-5.36-.82s-4.38 0-5.36.82q-.24.2-.43.43c-.82.98-.82 2.44-.82 5.36v8.13c0 2.11 0 3.17.44 3.96a3.5 3.5 0 0 0 1.36 1.36c.8.44 1.85.44 3.96.44'
        stroke='currentColor'
      />
      <path d='M14.56 5.16H9.44' stroke='currentColor' />
      <path
        d='m13.69 18.32.1-.1c1.33-1.33 2-2 2.82-2 .83 0 1.5.67 2.83 2l.1.1'
        stroke='currentColor'
      />
      <path d='M16.62 22.62v-6.13' stroke='currentColor' />
    </svg>
  )
}
