import type { Icon } from './types'

export const IconFileLock: Icon = ({
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
      data-slot='icon-ui-file-lock'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M11.82 22.24c-3.77 0-5.65 0-6.83-1.17S3.82 18 3.82 14.24V9.78c0-3.74 0-5.6 1.16-6.78C6.14 1.84 8 1.82 11.74 1.78l1.68-.02v6.8h6.76v8.55h-5.59l-.22 5.13z'
        fill='currentColor'
      />
      <path
        d='M20.18 10.99c0-1.53 0-2.29-.27-2.98l-.1-.25c-.31-.67-.86-1.2-1.95-2.26l-.67-.65-.84-.84c-.97-.97-1.45-1.45-2.04-1.74l-.48-.2c-.62-.21-1.3-.21-2.67-.21-3.13 0-4.7 0-5.78.83a4 4 0 0 0-.73.73c-.83 1.08-.83 2.65-.83 5.78v6.25c0 2.6 0 3.91.59 4.87a4 4 0 0 0 1.33 1.33c.96.59 2.26.59 4.87.59'
        stroke='currentColor'
      />
      <path d='M13.22 2.37v2.45c0 1.89 0 2.83.58 3.42s1.53.58 3.42.58h2.45' stroke='currentColor' />
      <path
        d='M16.2 22.3h3.14c.94 0 1.41 0 1.7-.29s.3-.76.3-1.7v-1.33c0-.95 0-1.42-.3-1.71-.29-.3-.76-.3-1.7-.3h-3.15c-.94 0-1.41 0-1.7.3s-.3.76-.3 1.7v1.34c0 .94 0 1.41.3 1.7.29.3.76.3 1.7.3'
        stroke='currentColor'
      />
      <path d='m15.8 16.98.19-1.52a1.82 1.82 0 0 1 3.61.02l.18 1.5' stroke='currentColor' />
    </svg>
  )
}
