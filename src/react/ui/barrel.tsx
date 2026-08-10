import type { Icon } from './types'

export const IconBarrel: Icon = ({
  size = 24,
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
      data-slot='barrel'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M4.34 12c0-2.95.49-4.45 1.4-6.2.51-.98.77-1.47 1.24-1.76.48-.29 1.07-.29 2.23-.29h5.92c1.17 0 1.75 0 2.23.3.48.28.73.77 1.24 1.75.9 1.76 1.4 3.27 1.4 6.2s-.49 4.44-1.4 6.2c-.5.98-.76 1.47-1.24 1.76s-1.06.29-2.23.29H9.2c-1.16 0-1.75 0-2.23-.3-.47-.28-.73-.77-1.24-1.74-.91-1.76-1.4-3.26-1.4-6.21'
        fill='currentColor'
      />
      <path
        d='M4.34 12c0-2.95.49-4.45 1.4-6.2.51-.98.77-1.47 1.24-1.76.48-.29 1.07-.29 2.23-.29h5.92c1.17 0 1.75 0 2.23.3.48.28.73.77 1.24 1.75.9 1.76 1.4 3.27 1.4 6.2s-.49 4.44-1.4 6.2c-.5.98-.76 1.47-1.24 1.76s-1.06.29-2.23.29H9.2c-1.16 0-1.75 0-2.23-.3-.47-.28-.73-.77-1.24-1.74-.91-1.76-1.4-3.26-1.4-6.21Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        d='M10.38 3.75A25 25 0 0 0 9 12c0 3.33.49 5.33 1.38 8.25m3.24-16.5C14.52 6.67 15 8.67 15 12s-.48 5.33-1.38 8.25M5.12 9H19M5.12 15H19'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
