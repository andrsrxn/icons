import type { Icon } from './types'

export const IconScreenShare: Icon = ({
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
      data-slot='icon-ui-screen-share'
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
      <path
        d='m8.42 11.31.75-.75c1.33-1.34 2-2 2.83-2s1.5.66 2.83 2l.75.75'
        stroke='currentColor'
      />
      <path d='M12 15.95V8.8' stroke='currentColor' />
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
