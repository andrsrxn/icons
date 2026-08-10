import type { Icon } from './types'

export const IconWebcam: Icon = ({
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
      data-slot='webcam'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M15.83 10.19a3.83 3.83 0 1 1-7.66 0 3.83 3.83 0 0 1 7.66 0'
        fill='currentColor'
      />
      <path
        d='M12 16.64a6.45 6.45 0 1 0 0-12.9 6.45 6.45 0 0 0 0 12.9Zm0 0v3.63m-3.73 0h7.46m.1-10.08a3.83 3.83 0 1 1-7.66 0 3.83 3.83 0 0 1 7.66 0Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
