import type { Icon } from './types'

export const IconBorderLeft: Icon = ({
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
      data-slot='icon-ui-border-left'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='2.76'
        y='2.76'
        width='18.48'
        height='18.48'
        rx='3'
        fill='currentColor'
      />
      <path d='M12 15.37V8.63' stroke='currentColor' />
      <path d='M15.37 12H8.63' stroke='currentColor' />
      <path
        d='M6 2.76h-.43a3 3 0 0 0-2.8 2.8L2.75 6v12.43A3 3 0 0 0 6 21.24'
        stroke='currentColor'
      />
      <path d='M18 2.77h.52a3 3 0 0 1 2.8 2.8v.45' stroke='currentColor' />
      <path d='M18 21.35h.52a3 3 0 0 0 2.8-2.8v-.45' stroke='currentColor' />
      <path d='M21.26 10.25v3.56' stroke='currentColor' />
      <path d='M13.8 21.25h-3.57' stroke='currentColor' />
      <path d='M13.8 2.77h-3.57' stroke='currentColor' />
    </svg>
  )
}
