import type { Icon } from './types'

export const IconShieldCheck: Icon = ({
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
      data-slot='ui-icon-shield-check'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M15.1 5.26 13.08 3.6c-.53-.44-.8-.66-1.11-.68s-.61.15-1.2.5L7.36 5.47 4.88 6.71c-.73.37-1.1.55-1.23.89-.15.33-.03.72.21 1.5l2.18 7c.1.29.13.43.21.55s.2.21.42.4l4.08 3.4c.6.5.9.75 1.25.75.36 0 .66-.23 1.27-.71l4.33-3.41c.25-.2.38-.3.47-.44.09-.13.13-.29.22-.6l1.87-6.8c.23-.84.35-1.26.17-1.6s-.58-.5-1.39-.81l-3.28-1.24-.3-.13c-.08-.04-.14-.1-.27-.2'
        fill='currentColor'
      />
      <path
        d='M12 2.5C10.72 3.63 7.26 6.12 3.59 7M12 2.5c1.27 1.13 4.74 3.62 8.41 4.5m0 0c0 5.3-2 11.29-8.41 14.5M3.59 7c0 5.3 2 11.29 8.41 14.5m-3-9.25.56.68c.72.88 1.07 1.33 1.55 1.32.48 0 .83-.44 1.55-1.32l2.9-3.59'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
