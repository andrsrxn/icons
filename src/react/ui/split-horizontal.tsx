import type { Icon } from './types'

export const IconSplitHorizontal: Icon = ({
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
      data-slot='split-horizontal'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect opacity='.2' x='3.75' y='6' width='16.51' height='12' rx='2' fill='#000' />
      <rect x='3.75' y='6' width='16.51' height='12' rx='2' stroke='#000' strokeWidth='1.5' />
      <path d='M12 4v16' stroke='#000' strokeWidth='1.5' strokeLinecap='round' />
    </svg>
  )
}
