import type { Icon } from './types'

export const IconQrCode: Icon = ({
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
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-qr-code'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={isLabelled && title && !ariaLabel ? 'qr-code-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? <title id={'qr-code-title'}>{title}</title> : null}
      <rect
        opacity='.2'
        width='7.87'
        height='7.87'
        rx='2'
        transform='matrix(0 -1 -1 0 10.66 10.53)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        width='7.87'
        height='7.87'
        rx='2'
        transform='matrix(0 -1 -1 0 21.32 10.53)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        width='7.87'
        height='7.87'
        rx='2'
        transform='matrix(0 -1 -1 0 10.66 21.29)'
        fill='currentColor'
      />
      <rect
        width='7.87'
        height='7.87'
        rx='2'
        transform='matrix(0 -1 -1 0 10.66 10.53)'
        stroke='currentColor'
      />
      <rect
        width='7.87'
        height='7.87'
        rx='2'
        transform='matrix(0 -1 -1 0 21.32 10.53)'
        stroke='currentColor'
      />
      <rect
        width='7.87'
        height='7.87'
        rx='2'
        transform='matrix(0 -1 -1 0 10.66 21.29)'
        stroke='currentColor'
      />
      <path
        d='M13.44 16.38c0-.83 0-1.24.12-1.57a2 2 0 0 1 1.2-1.2c.33-.12.74-.12 1.57-.12h3.03a2 2 0 0 1 1.96 2.06m-7.88 3.75c0 1.1.89 1.99 1.98 1.99h1'
        stroke='currentColor'
      />
      <path
        d='M18.67 16.03h-.9c-.95 0-1.42 0-1.71.3-.3.29-.3.76-.3 1.7v.65m5.56-.5v1.18c0 1.06-.87 1.93-1.93 1.93m-1.31-2.61h.75'
        stroke='currentColor'
      />
    </svg>
  )
}
