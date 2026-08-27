import type { Icon } from './types'

export const IconDoor: Icon = ({
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
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-door'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path opacity='.2' fill='currentColor' d='M5.22 2.83h13.55v18.4H5.22z' />
      <path
        d='M18.78 20.97V6.83c0-1.88 0-2.82-.59-3.41s-1.53-.59-3.41-.59H9.22c-1.88 0-2.82 0-3.41.59s-.59 1.53-.59 3.41v14.14m15.81.27H2.97M13 12h2.96'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
