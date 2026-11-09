import type { Icon } from './types'

export const IconDevicePhoneRotate: Icon = ({
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
      data-slot='icon-ui-device-phone-rotate'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M8.23 18.74c-1.46-.85-2.19-1.27-2.58-1.88a3 3 0 0 1-.48-1.78c.04-.72.46-1.45 1.3-2.91l2.95-5.1c.84-1.46 1.27-2.2 1.87-2.59a3 3 0 0 1 1.78-.47c.73.03 1.46.45 2.92 1.3 1.46.84 2.2 1.26 2.58 1.87a3 3 0 0 1 .48 1.78c-.04.72-.46 1.45-1.3 2.92l-2.95 5.1c-.84 1.46-1.26 2.19-1.87 2.58a3 3 0 0 1-1.78.48c-.72-.04-1.45-.46-2.92-1.3'
        fill='currentColor'
      />
      <path
        d='m14.8 16.98 2.95-5.1c.84-1.47 1.26-2.2 1.3-2.92a3 3 0 0 0-.48-1.78c-.39-.6-1.12-1.03-2.58-1.87v0c-1.46-.85-2.2-1.27-2.92-1.3a3 3 0 0 0-1.78.47c-.6.4-1.03 1.13-1.87 2.59l-2.95 5.1c-.84 1.46-1.26 2.2-1.3 2.91a3 3 0 0 0 .48 1.78c.4.61 1.12 1.03 2.58 1.88v0c1.47.84 2.2 1.26 2.92 1.3a3 3 0 0 0 1.78-.48c.6-.39 1.03-1.12 1.87-2.58'
        stroke='currentColor'
      />
      <path d='m15.84 8.8-2.8-1.62' stroke='currentColor' />
      <path
        d='m18.79 16.78-.56.47c-.8.66-1.18 1-1.2 1.44s.35.8 1.08 1.52l.52.52'
        stroke='currentColor'
      />
      <path
        d='m5.21 6.8.56-.47c.8-.66 1.18-.99 1.2-1.43s-.35-.8-1.08-1.52l-.52-.52'
        stroke='currentColor'
      />
      <path
        d='M17.67 18.7a3.77 3.77 0 0 0 4.62-2.67 4.4 4.4 0 0 0-1.08-4.22'
        stroke='currentColor'
      />
      <path d='M6.33 4.9a3.77 3.77 0 0 0-4.62 2.66 4.4 4.4 0 0 0 1.08 4.22' stroke='currentColor' />
    </svg>
  )
}
