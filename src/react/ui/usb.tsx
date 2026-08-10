import type { Icon } from './types'

export const IconUsb: Icon = ({
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
      data-slot='usb'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect opacity='.2' x='7.64' y='8.26' width='8.72' height='11.96' rx='2' fill='currentColor' />
      <path
        d='M15.01 8.54V5.78c0-.94 0-1.41-.29-1.7-.3-.3-.76-.3-1.7-.3h-2.03c-.95 0-1.42 0-1.7.3-.3.29-.3.76-.3 1.7v2.76m-1.35 3.89c0-1.78 0-2.67.53-3.25l.11-.12c.58-.52 1.47-.52 3.25-.52h.94c1.78 0 2.67 0 3.25.52l.11.12c.53.58.53 1.47.53 3.25v4.07a4 4 0 0 1-3.71 3.7c-.15.02-.31.02-.65.02l-.65-.01a4 4 0 0 1-3.7-3.71l-.01-.64z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path d='M11.42 6.16h1.16' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
    </svg>
  )
}
