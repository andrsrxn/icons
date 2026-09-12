import type { Icon } from './types'

export const IconVideo: Icon = ({
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
      data-slot='icon-ui-video'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='1.85'
        y='5.46'
        width='14.51'
        height='13.08'
        rx='3'
        fill='currentColor'
      />
      <rect x='1.85' y='5.46' width='14.51' height='13.08' rx='3' stroke='currentColor' />
      <path
        d='m16.36 9.14.63-.32c2.08-1.05 3.12-1.58 3.94-1.28a2 2 0 0 1 .67.41c.64.6.64 1.76.64 4.1 0 2.3 0 3.45-.64 4.04a2 2 0 0 1-.65.41c-.81.31-1.85-.2-3.92-1.2l-.67-.34'
        stroke='currentColor'
      />
    </svg>
  )
}
