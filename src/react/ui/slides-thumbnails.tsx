import type { Icon } from './types'

export const IconSlidesThumbnails: Icon = ({
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
      data-slot='ui-icon-slides-thumbnails'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        width='11.88'
        height='18.56'
        rx='3'
        transform='matrix(0 -1 -1 0 21.28 15.88)'
        fill='currentColor'
      />
      <rect
        width='11.88'
        height='18.56'
        rx='3'
        transform='matrix(0 -1 -1 0 21.28 15.88)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M4.3 18.74a.68.68 0 1 1 0 1.35.68.68 0 0 1 0-1.35m5.13 0a.68.68 0 1 1 0 1.35.68.68 0 0 1 0-1.35m5.14 0a.68.68 0 1 1 0 1.35.68.68 0 0 1 0-1.35m5.13 0a.68.68 0 1 1 0 1.35.68.68 0 0 1 0-1.35'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
