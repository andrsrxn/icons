import type { Icon } from './types'

export const IconScreenShareCheck: Icon = ({
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
      data-slot='icon-ui-screen-share-check'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='14.07'
        height='20.29'
        rx='3'
        transform='matrix(0 -1 -1 0 22.14 19.03)'
        fill='currentColor'
      />
      <rect
        width='14.07'
        height='20.29'
        rx='3'
        transform='matrix(0 -1 -1 0 22.14 19.03)'
        stroke='currentColor'
      />
      <path
        d='M7.98 12.44 9 13.72c.72.9 1.08 1.36 1.57 1.36.48 0 .84-.46 1.56-1.37l3.89-4.92'
        stroke='currentColor'
      />
    </svg>
  )
}
