import type { Icon } from './types'

export const IconGridHorizontal: Icon = ({
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
      data-slot='icon-ui-grid-horizontal'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M16.62 2.76c1.51 0 2.27 0 2.86.27a3 3 0 0 1 1.5 1.5c.26.58.26 1.34.26 2.85s0 2.27-.27 2.85a3 3 0 0 1-1.5 1.5c-.58.27-1.34.27-2.85.27H7.38c-1.51 0-2.27 0-2.86-.27a3 3 0 0 1-1.5-1.5c-.26-.58-.26-1.34-.26-2.85s0-2.27.27-2.86a3 3 0 0 1 1.5-1.5c.58-.26 1.34-.26 2.85-.26z'
        fill='currentColor'
      />
      <rect
        width='9.24'
        height='18.48'
        rx='3'
        transform='matrix(0 -1 -1 0 21.24 12)'
        stroke='currentColor'
      />
      <path d='M12 3v9' stroke='currentColor' />
      <path d='M3.91 18.47h16.1' stroke='currentColor' />
      <path
        d='m18.15 15.38.26.25c1.33 1.34 2 2 2 2.83s-.67 1.5-2 2.83l-.26.27'
        stroke='currentColor'
      />
    </svg>
  )
}
