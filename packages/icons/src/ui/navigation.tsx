import type { Icon } from './types'

export const IconNavigation: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

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
      data-slot='icon-ui-navigation'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M20.21 8.9c1.36-3.57 2.03-5.36 1.12-6.27-.92-.91-2.7-.24-6.27 1.11L7.83 6.48C3.77 8 1.75 8.78 1.73 10.15c-.01 1.36 2.02 2.18 6.08 3.8a4 4 0 0 1 1.47.77c.3.3.45.68.76 1.47 1.6 4.02 2.4 6.02 3.76 6.02h.02c1.37-.02 2.13-2.04 3.66-6.09z'
        fill='currentColor'
      />
      <path
        d='M20.21 8.9c1.36-3.57 2.03-5.36 1.12-6.27-.92-.91-2.7-.24-6.27 1.11L7.83 6.48C3.77 8 1.75 8.78 1.73 10.15c-.01 1.36 2.02 2.18 6.08 3.8.79.32 1.18.48 1.47.77q0 0 0 0c.3.3.45.68.76 1.47 1.6 4.02 2.4 6.02 3.76 6.02h.02c1.37-.02 2.13-2.04 3.66-6.09z'
        stroke='currentColor'
      />
    </svg>
  )
}
