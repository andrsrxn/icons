import type { Icon } from './types'

export const IconFileCheck: Icon = ({
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
      data-slot='icon-ui-file-check'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M11.8 22.28c-3.78 0-5.66 0-6.83-1.18-1.18-1.17-1.18-3.05-1.18-6.82V9.74c0-3.73 0-5.6 1.16-6.77s3.03-1.19 6.76-1.23l1.71-.02v6.82h6.79v8.63c0 .36 0 .54-.02.71a4 4 0 0 1-.56 1.73l-.41.58c-.32.44-.49.66-.67.85a4 4 0 0 1-2.37 1.2c-.26.04-.53.04-1.08.04z'
        fill='currentColor'
      />
      <path
        d='M20.2 13.09v-1.97c0-1.67 0-2.5-.3-3.25-.32-.74-.92-1.32-2.11-2.49l-.58-.56-.85-.84c-.97-.97-1.45-1.46-2.05-1.75l-.46-.19c-.63-.22-1.32-.22-2.69-.22-3.16 0-4.74 0-5.82.85a4 4 0 0 0-.7.7c-.85 1.08-.85 2.66-.85 5.82v5.46c0 3.4 0 5.11.97 6.24q.2.22.42.42c1.13.97 2.83.97 6.24.97'
        stroke='currentColor'
      />
      <path
        d='M13.22 2.34v2.47c0 1.88 0 2.83.58 3.42.59.58 1.53.58 3.42.58h2.47'
        stroke='currentColor'
      />
      <path
        d='m14.44 19.86 1 1.23c.72.89 1.08 1.33 1.56 1.32.48 0 .83-.44 1.55-1.32l3.86-4.77'
        stroke='currentColor'
      />
    </svg>
  )
}
