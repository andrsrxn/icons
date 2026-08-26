import type { Icon } from './types'

export const IconWebcam: Icon = ({
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
      data-slot='ui-icon-webcam'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M16.25 9.7a4.25 4.25 0 1 0-8.5 0 4.25 4.25 0 0 0 8.5 0'
        fill='currentColor'
      />
      <path
        d='M16.25 9.7A4.23 4.23 0 0 0 12 5.45a4.25 4.25 0 1 0 4.25 4.25'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M19.27 9.7A7.25 7.25 0 0 0 12 2.43a7.27 7.27 0 1 0 7.27 7.27M12 21.4v-4.42M8.02 21.4h7.96'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
