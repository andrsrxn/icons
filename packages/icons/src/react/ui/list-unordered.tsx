import type { Icon } from './types'

export const IconListUnordered: Icon = ({
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
      data-slot='icon-ui-list-unordered'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={isLabelled && title && !ariaLabel ? 'list-unordered-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? (
        <title id={'list-unordered-title'}>{title}</title>
      ) : null}
      <path d='M21.61 6H8m13.61 6H8m13.61 6H8' stroke='currentColor' />
      <path
        d='M4 12a.66.66 0 1 1-1.32 0A.66.66 0 0 1 4 12m0-6a.66.66 0 1 1-1.32 0A.66.66 0 0 1 4 6m0 12a.66.66 0 1 1-1.32 0A.66.66 0 0 1 4 18'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
