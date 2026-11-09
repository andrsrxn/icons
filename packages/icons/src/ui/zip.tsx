import type { Icon } from './types'

export const IconZip: Icon = ({
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
      data-slot='icon-ui-zip'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M11.7 1.7c-3.73.03-5.6.05-6.75 1.22S3.79 5.96 3.79 9.69v4.54c0 3.77 0 5.66 1.17 6.83s3.06 1.17 6.83 1.17h.42c3.77 0 5.66 0 6.83-1.17S20.2 18 20.2 14.23V8.5h-6.79V1.68zm-3 11.4 1.62 2.95-1.62 1.96-1.66-1.96z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='m17.21 4.77-.84-.84c-.98-.97-1.46-1.46-2.06-1.75L13.85 2c-.63-.21-1.32-.21-2.69-.21-3.16 0-4.74 0-5.83.84a4 4 0 0 0-.7.7C3.8 4.4 3.8 5.98 3.8 9.14v5.1c0 3.76 0 5.65 1.17 6.82s3.06 1.17 6.83 1.17h.42c3.77 0 5.66 0 6.83-1.17S20.2 18 20.2 14.23v-3.16c0-1.67 0-2.5-.32-3.24-.31-.75-.9-1.33-2.1-2.5z'
        stroke='currentColor'
      />
      <path
        d='M13.22 2.3v2.46c0 1.89 0 2.83.58 3.42.59.58 1.53.58 3.42.58h2.48'
        stroke='currentColor'
      />
      <path d='M8.7 2.3v11.36' stroke='currentColor' />
      <path d='M7.25 6.12h2.9' stroke='currentColor' />
      <path d='M7.25 10.3h2.9' stroke='currentColor' />
      <path
        d='M8.7 17.82c-.87 0-1.57-.7-1.57-1.57 0-1.47 1.57-2.6 1.57-2.6s1.58 1.16 1.58 2.6c0 .87-.7 1.57-1.58 1.57'
        stroke='currentColor'
      />
    </svg>
  )
}
