import type { Icon } from './types'

export const IconGridVertical: Icon = ({
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
      data-slot='icon-ui-grid-vertical'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M21.4 16.78c0 1.5 0 2.26-.27 2.85a3 3 0 0 1-1.5 1.5c-.59.27-1.34.27-2.85.27s-2.27 0-2.86-.27a3 3 0 0 1-1.5-1.5c-.26-.59-.26-1.34-.26-2.85V7.54c0-1.51 0-2.27.26-2.86a3 3 0 0 1 1.5-1.5c.6-.26 1.35-.26 2.86-.26s2.26 0 2.85.26a3 3 0 0 1 1.5 1.5c.27.6.27 1.35.27 2.86z'
        fill='currentColor'
      />
      <rect
        width='9.24'
        height='18.48'
        rx='3'
        transform='matrix(1 0 0 -1 12.16 21.4)'
        stroke='currentColor'
      />
      <path d='M21.16 12.16h-9' stroke='currentColor' />
      <path d='M5.7 4.07v16.1' stroke='currentColor' />
      <path
        d='m8.78 18.3-.26.26c-1.33 1.34-2 2-2.83 2-.82 0-1.5-.66-2.83-2l-.26-.26'
        stroke='currentColor'
      />
    </svg>
  )
}
