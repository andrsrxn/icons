import type { Icon } from './types'

export const IconSock: Icon = ({
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
      data-slot='icon-ui-sock'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M5.8 20.86a4.84 4.84 0 0 0 6.84 0l5.67-5.67c.57-.58.86-.87 1.01-1.23.16-.37.16-.78.16-1.6V9.48c0-1.89 0-2.83-.59-3.42s-1.53-.58-3.41-.58h-2.62c-1.46 0-2.2 0-2.71.36a2 2 0 0 0-.48.49c-.37.51-.37 1.25-.37 2.71 0 .64 0 .96-.1 1.25l-.12.32c-.15.27-.37.5-.82.95L5.8 14.02a4.84 4.84 0 0 0 0 6.84'
        fill='currentColor'
      />
      <path
        d='M5.8 20.86a4.84 4.84 0 0 0 6.84 0l5.67-5.67h0c.57-.58.86-.87 1.01-1.23.16-.37.16-.78.16-1.6V5.78c0-1.89 0-2.83-.59-3.41s-1.53-.59-3.41-.59h0-2.18c-1.89 0-2.83 0-3.41.59-.59.58-.59 1.52-.59 3.41v3.08c0 .82 0 1.22-.15 1.6-.15.36-.44.65-1.02 1.23L5.8 14.02a4.84 4.84 0 0 0 0 6.84'
        stroke='currentColor'
      />
      <path d='M9.38 5.5h9.71' stroke='currentColor' />
      <path
        d='M15.52 17.47c-1.56-.9-1.98-3.1-.92-4.93 1.05-1.82 3.17-2.56 4.73-1.66'
        stroke='currentColor'
      />
    </svg>
  )
}
