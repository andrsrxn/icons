import type { Icon } from './types'

export const IconCursorText: Icon = ({
  size = 24,
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
      data-slot='cursor-text'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M8.88 20.34c1.05 0 1.58 0 1.98-.2a2 2 0 0 0 .96-.95c.19-.4.19-.93.19-1.98V6.79c0-1.05 0-1.57-.2-1.98a2 2 0 0 0-.95-.95c-.4-.2-.93-.2-1.98-.2m6.24 16.68c-1.05 0-1.58 0-1.98-.2a2 2 0 0 1-.96-.95c-.19-.4-.19-.93-.19-1.98V6.79c0-1.05 0-1.57.2-1.98a2 2 0 0 1 .95-.95c.4-.2.93-.2 1.98-.2'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
