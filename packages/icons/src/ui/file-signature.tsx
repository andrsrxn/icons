import type { Icon } from './types'

export const IconFileSignature: Icon = ({
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
      data-slot='icon-ui-file-signature'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M11.8 22.28c-3.78 0-5.66 0-6.83-1.18-1.18-1.17-1.18-3.05-1.18-6.82V9.74c0-3.73 0-5.6 1.16-6.77s3.03-1.19 6.76-1.23l1.71-.02v6.82h6.79v5.74c0 3.77 0 5.65-1.18 6.82-1.17 1.18-3.05 1.18-6.82 1.18z'
        fill='currentColor'
      />
      <path
        d='M20.2 12.98v-1.86c0-1.67 0-2.5-.3-3.25-.32-.74-.92-1.32-2.11-2.49l-.58-.56-.85-.84c-.97-.97-1.45-1.46-2.05-1.75l-.46-.19c-.63-.22-1.32-.22-2.69-.22-3.16 0-4.74 0-5.82.85a4 4 0 0 0-.7.7c-.85 1.08-.85 2.66-.85 5.82v7.3c0 1.66 0 2.5.25 3.16a4 4 0 0 0 2.38 2.38c.66.25 1.5.25 3.16.25'
        stroke='currentColor'
      />
      <path
        d='M13.22 2.34v2.47c0 1.88 0 2.83.58 3.42.59.58 1.53.58 3.42.58h2.47'
        stroke='currentColor'
      />
      <path
        d='M13.17 21.41a7 7 0 0 0 1.45-2.26m0 0a7 7 0 0 0 .72-3.14c-.15-2.21-1.06-2.81-1.87-2.78-.8.02-2 1.37-.56 4a5 5 0 0 0 1.71 1.92m0 0c.87.5 1.66.35 2.1.12.74-.37 1.27-1.5 1.07-2.44.13.6.95 1.93 1.99 1.67 1.04-.27 1.13-1.49.87-1.95'
        stroke='currentColor'
      />
      <path d='m22.19 21.04-4.72.8' stroke='currentColor' />
    </svg>
  )
}
