import type { Icon } from './types'

export const IconUndo: Icon = ({
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
      data-slot='ui-icon-undo'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={isLabelled && title && !ariaLabel ? 'undo-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`ui-icon ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? <title id={'undo-title'}>{title}</title> : null}
      <path d='M4.52 8.05h9.81a5.66 5.66 0 0 1 0 11.32h-1.87' stroke='currentColor' />
      <path
        d='m7.87 3.51-1.7 1.7c-1.34 1.34-2.01 2-2.01 2.83s.67 1.5 2 2.83l1.7 1.71'
        stroke='currentColor'
      />
    </svg>
  )
}
