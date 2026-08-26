import type { Icon } from './types'

export const IconShield: Icon = ({
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
      data-slot='ui-icon-shield'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M12 12.22v4.64c0 1.98 0 2.97.6 3.23s1.32-.42 2.77-1.77l1.76-1.67c.16-.14.23-.2.29-.3.06-.08.1-.17.18-.36l2.6-6.03c.35-.83.53-1.24.4-1.62-.15-.37-.55-.57-1.36-.97l-3.68-1.8-.2-.1h-.01l-.18-.14c-1.32-1.1-1.99-1.65-2.53-1.44l-.13.06C12 4.24 12 5.1 12 6.82z'
        fill='currentColor'
      />
      <path
        d='M12 21.37V3.61m0-1.11C10.72 3.63 7.26 6.12 3.59 7M12 2.5c1.27 1.13 4.74 3.62 8.41 4.5m0 0c0 5.3-2 11.29-8.41 14.5M3.59 7c0 5.3 2 11.29 8.41 14.5'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
