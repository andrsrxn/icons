import type { Icon } from './types'

export const IconQuotesDown: Icon = ({
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
      data-slot='icon-ui-quotes-down'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M2.78 16.72a3.9 3.9 0 1 0 7.82 0 3.9 3.9 0 0 0-7.82 0'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M13.58 16.72a3.9 3.9 0 1 0 7.81 0 3.9 3.9 0 0 0-7.81 0'
        fill='currentColor'
      />
      <path d='M2.78 16.72a3.9 3.9 0 0 0 3.91 3.91 3.9 3.9 0 1 0-3.9-3.9' stroke='currentColor' />
      <path d='M13.58 16.72a3.9 3.9 0 0 0 3.91 3.91 3.9 3.9 0 1 0-3.9-3.9' stroke='currentColor' />
      <path d='M2.78 16.67c0-1.64-.1-4.7.94-7.45a13 13 0 0 1 4.91-6.45' stroke='currentColor' />
      <path d='M13.58 16.67c0-1.64-.1-4.7.93-7.45a13 13 0 0 1 4.92-6.45' stroke='currentColor' />
    </svg>
  )
}
