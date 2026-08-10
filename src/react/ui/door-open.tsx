import type { Icon } from './types'

export const IconDoorOpen: Icon = ({
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
      data-slot='door-open'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path opacity='.2' fill='currentColor' d='M13.54 5.33H18v14.89h-4.46z' />
      <path d='m10.2 12.5 1.46-.3' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
      <path
        d='M14 19.97V8.44c0-2.46 0-3.69-.8-4.29-.81-.6-1.99-.25-4.35.46-1.37.41-2.06.62-2.45 1.15S6 7 6 8.44v11.53'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path d='M20 20.22H4' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
      <path
        d='M14 5.33c1.89 0 2.83 0 3.41.59.59.58.59 1.52.59 3.41v10.64'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
