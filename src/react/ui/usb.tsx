import type { Icon } from './types'

export const IconUsb: Icon = ({
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
      data-slot='ui-icon-usb'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect opacity='.2' x='7.07' y='7.96' width='9.86' height='13.51' rx='2' fill='currentColor' />
      <path
        d='M15.4 8.28V6.3c0-1.32 0-1.97-.3-2.46a2 2 0 0 0-.65-.65c-.48-.3-1.14-.3-2.45-.3s-1.97 0-2.45.3a2 2 0 0 0-.66.65c-.3.49-.3 1.14-.3 2.46v1.97m-1.52 4.01c0-1.89 0-2.83.59-3.42.58-.58 1.53-.58 3.41-.58h1.86c1.88 0 2.83 0 3.41.58.59.59.59 1.53.59 3.42v4.27c0 .86 0 1.29-.07 1.65a4 4 0 0 1-3.2 3.2c-.37.07-.8.07-1.66.07v0c-.86 0-1.3 0-1.65-.06a4 4 0 0 1-3.21-3.21c-.07-.36-.07-.8-.07-1.65zm4.27-6.69h1.32'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
