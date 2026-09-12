import type { Icon } from './types'

export const IconSlidesThumbnails: Icon = ({
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
      data-slot='icon-ui-slides-thumbnails'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='13.14'
        height='20.54'
        rx='3'
        transform='matrix(0 -1 -1 0 22.27 16.29)'
        fill='currentColor'
      />
      <rect
        width='13.14'
        height='20.54'
        rx='3'
        transform='matrix(0 -1 -1 0 22.27 16.29)'
        stroke='currentColor'
      />
      <path
        d='M3.47 19.45a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M9.16 19.45a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M14.84 19.45a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M20.53 19.45a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
