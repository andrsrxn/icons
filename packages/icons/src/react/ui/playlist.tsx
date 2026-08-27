import type { Icon } from './types'

export const IconPlaylist: Icon = ({
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
      data-slot='ui-icon-playlist'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M13.99 14.75c0-1.85 0-2.77.38-3.3a2 2 0 0 1 1.46-.81c.65-.05 1.43.43 3 1.4 1.47.89 2.2 1.33 2.45 1.9a2 2 0 0 1 0 1.62c-.25.57-.98 1.02-2.44 1.9-1.58.97-2.36 1.46-3.01 1.4a2 2 0 0 1-1.46-.81c-.38-.53-.38-1.45-.38-3.3'
        fill='currentColor'
      />
      <path
        d='M21.22 6H2.84m7.81 6H2.84m7.81 6H2.84m11.15-3.25c0-1.85 0-2.77.38-3.3a2 2 0 0 1 1.46-.81c.65-.05 1.43.43 3 1.4 1.47.89 2.2 1.33 2.45 1.9a2 2 0 0 1 0 1.62c-.25.57-.98 1.02-2.44 1.9-1.58.97-2.36 1.46-3.01 1.4a2 2 0 0 1-1.46-.81c-.38-.53-.38-1.45-.38-3.3'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
