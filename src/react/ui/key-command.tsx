import type { Icon } from './types'

export const IconKeyCommand: Icon = ({
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
      data-slot='ui-icon-key-command'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M5.58 8.36A2.83 2.83 0 1 1 8.4 5.52v2.84zm12.84 0a2.83 2.83 0 1 0-2.83-2.84v2.84zM5.58 15.71a2.83 2.83 0 1 0 2.83 2.84V15.7zm12.84 0a2.83 2.83 0 1 1-2.83 2.84V15.7z'
        fill='currentColor'
      />
      <path
        d='M5.58 8.36A2.83 2.83 0 1 1 8.4 5.52v2.84zm12.84 0a2.83 2.83 0 1 0-2.83-2.84v2.84zM5.58 15.71a2.83 2.83 0 1 0 2.83 2.84V15.7zm12.84 0a2.83 2.83 0 1 1-2.83 2.84V15.7zM8.41 8.36v7.35m7.18-.03V8.32m-7.18 7.39h7.18m0-7.39H8.4'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
