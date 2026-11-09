import type { Icon } from './types'

export const IconSlidesThumbnails: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-slides-thumbnails'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M15.7 16.29c2.88 0 4.33 0 5.3-.8q.26-.22.47-.48c.8-.97.8-2.41.8-5.3s0-4.32-.8-5.3a4 4 0 0 0-.47-.47c-.97-.8-2.42-.8-5.3-.8H8.3c-2.88 0-4.33 0-5.3.8q-.26.21-.47.48c-.8.97-.8 2.4-.8 5.3 0 2.88 0 4.32.8 5.3q.21.24.47.47c.97.8 2.42.8 5.3.8z'
        fill='currentColor'
      />
      <path
        d='M1.73 9.71c0-2.88 0-4.32.8-5.3q.21-.26.47-.47c.97-.8 2.42-.8 5.3-.8h7.4c2.88 0 4.33 0 5.3.8q.26.21.47.48c.8.97.8 2.4.8 5.3v0c0 2.88 0 4.32-.8 5.3q-.21.24-.47.47c-.97.8-2.42.8-5.3.8H8.3c-2.88 0-4.33 0-5.3-.8a4 4 0 0 1-.47-.48c-.8-.97-.8-2.41-.8-5.3'
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
