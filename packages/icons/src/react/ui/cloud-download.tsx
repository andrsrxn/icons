import type { Icon } from './types'

export const IconCloudDownload: Icon = ({
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
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-cloud-download'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='m2.33 12.83 3.49 3.44h3.37l2.84-2.38 2.84 2.38h3.02l3-1.94v-3.89l-3-2.14-1.57 1.1-.85-3.17-3.58-2.07-3 1.3L7.38 8.3l-3.5 1.1z'
        fill='currentColor'
      />
      <path
        d='M7.19 7.93a4.62 4.62 0 0 1 8.48-1.07c.75 1.31.73 2.64.55 3.53M5.55 15.95a3.3 3.3 0 0 1-1.96-1.05 3.87 3.87 0 0 1 2.78-6.6c1.27 0 2.4.6 3.1 1.55'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M16.35 8.72c.97-.5 2.15-.43 3.06.1a3.9 3.9 0 0 1 1.43 5.3c-.64 1.11-1.5 1.78-2.4 1.9m-9.26-.51c1.32-1.32 1.98-1.98 2.8-1.99h.03c.82 0 1.48.67 2.8 2M12 14.1V20'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
