import type { Icon } from './types'

export const IconQuotesUp: Icon = ({
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
      data-slot='icon-ui-quotes-up'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M21.23 7.36a3.9 3.9 0 1 0-7.81 0 3.9 3.9 0 0 0 7.81 0'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M10.44 7.36a3.9 3.9 0 1 0-7.82 0 3.9 3.9 0 0 0 7.82 0'
        fill='currentColor'
      />
      <path d='M21.23 7.36a3.9 3.9 0 0 0-3.9-3.9 3.9 3.9 0 1 0 3.9 3.9' stroke='currentColor' />
      <path d='M10.43 7.36a3.9 3.9 0 0 0-3.9-3.9 3.9 3.9 0 1 0 3.9 3.9' stroke='currentColor' />
      <path d='M21.23 7.42c0 1.63.1 4.7-.93 7.44a13 13 0 0 1-4.92 6.46' stroke='currentColor' />
      <path d='M10.43 7.42c0 1.63.11 4.7-.93 7.44a13 13 0 0 1-4.92 6.46' stroke='currentColor' />
    </svg>
  )
}
