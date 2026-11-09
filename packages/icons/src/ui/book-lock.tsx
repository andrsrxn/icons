import type { Icon } from './types'

export const IconBookLock: Icon = ({
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
      data-slot='icon-ui-book-lock'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M10.43 14.34h3.14c.94 0 1.41 0 1.7-.3.3-.29.3-.76.3-1.7v-1.32c0-.95 0-1.42-.3-1.71-.29-.3-.76-.3-1.7-.3h-3.14c-.94 0-1.41 0-1.7.3s-.3.76-.3 1.7v1.33c0 .94 0 1.41.3 1.7.29.3.76.3 1.7.3'
        stroke='currentColor'
      />
      <path d='m10.03 9.02.2-1.52a1.82 1.82 0 0 1 3.6.02l.18 1.5' stroke='currentColor' />
      <path
        opacity='.2'
        d='M20.98 9.74c0-3.77 0-5.66-1.17-6.83s-3.06-1.17-6.83-1.17h-1.96c-3.77 0-5.66 0-6.83 1.17S3.02 5.97 3.02 9.74v8.75h9.96c3.77 0 5.66 0 6.83-1.17s1.17-3.05 1.17-6.83zm-5.5-.5v5.04H8.63V9.24z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M3.02 18.5h9.96c3.77 0 5.66 0 6.83-1.18 1.17-1.17 1.17-3.05 1.17-6.83v-.75c0-3.77 0-5.66-1.17-6.83s-3.06-1.17-6.83-1.17h-1.96c-3.77 0-5.66 0-6.83 1.17S3.02 5.97 3.02 9.74z'
        stroke='currentColor'
      />
      <path
        d='M3.02 18.5c0 .7 0 1.07.06 1.36a3 3 0 0 0 2.34 2.34c.3.06.65.06 1.37.06h8.1c1.42 0 2.12 0 2.68-.23a3 3 0 0 0 1.6-1.6c.24-.56.24-1.27.24-2.69'
        stroke='currentColor'
      />
    </svg>
  )
}
