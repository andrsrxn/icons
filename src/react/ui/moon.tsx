import type { Icon } from './types'

export const IconMoon: Icon = ({
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
      data-slot='moon'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='m5.65 15.43-.52-.01c-.95-.06-1.43-.08-1.58.19s.07.6.53 1.26A8.86 8.86 0 1 0 15.8 4.12c-.7-.4-1.04-.6-1.3-.42s-.2.65-.06 1.6q.1.62.1 1.26c0 4.9-3.98 8.87-8.88 8.87'
        fill='currentColor'
      />
      <path
        clipRule='evenodd'
        d='m5.65 15.43-.52-.01c-.95-.06-1.43-.08-1.58.19s.07.6.53 1.26A8.86 8.86 0 1 0 15.8 4.12c-.7-.4-1.04-.6-1.3-.42s-.2.65-.06 1.6q.1.62.1 1.26c0 4.9-3.98 8.87-8.88 8.87Z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
    </svg>
  )
}
