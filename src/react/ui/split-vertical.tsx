import type { Icon } from './types'

export const IconSplitVertical: Icon = ({
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
      data-slot='split-vertical'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='6'
        y='20.25'
        width='16.51'
        height='12'
        rx='2'
        transform='rotate(-90 6 20.25)'
        fill='#000'
      />
      <rect
        x='6'
        y='20.25'
        width='16.51'
        height='12'
        rx='2'
        transform='rotate(-90 6 20.25)'
        stroke='#000'
        strokeWidth='1.5'
      />
      <path d='M4 12h16' stroke='#000' strokeWidth='1.5' strokeLinecap='round' />
    </svg>
  )
}
