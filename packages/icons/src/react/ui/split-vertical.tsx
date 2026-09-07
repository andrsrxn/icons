import type { Icon } from './types'

export const IconSplitVertical: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

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
      data-slot='icon-ui-split-vertical'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={isLabelled && title && !ariaLabel ? 'split-vertical-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? (
        <title id={'split-vertical-title'}>{title}</title>
      ) : null}
      <rect
        opacity='.2'
        x='5.25'
        y='21.29'
        width='18.57'
        height='13.5'
        rx='3'
        transform='rotate(-90 5.25 21.29)'
        fill='currentColor'
      />
      <rect
        x='5.25'
        y='21.29'
        width='18.57'
        height='13.5'
        rx='3'
        transform='rotate(-90 5.25 21.29)'
        stroke='currentColor'
      />
      <path d='M3 12h18' stroke='currentColor' />
    </svg>
  )
}
