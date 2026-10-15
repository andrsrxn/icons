import type { Icon } from './types'

export const IconScreenShareWarning: Icon = ({
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
      data-slot='icon-ui-screen-share-warning'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='14.24'
        height='20.53'
        rx='3'
        transform='matrix(0 -1 -1 0 22.27 19.12)'
        fill='currentColor'
      />
      <path d='M12 12.2V8.14' stroke='currentColor' />
      <path
        d='M12.49 15.64a.49.49 0 1 1-.98 0 .49.49 0 0 1 .98 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <rect
        width='14.24'
        height='20.53'
        rx='3'
        transform='matrix(0 -1 -1 0 22.27 19.12)'
        stroke='currentColor'
      />
    </svg>
  )
}
