import type { Icon } from './types'

export const IconTextCreation: Icon = ({
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
      data-slot='ui-icon-text-creation'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect opacity='.2' x='2.72' y='2.63' width='4.47' height='4.47' rx='1' fill='currentColor' />
      <rect opacity='.2' x='16.94' y='2.63' width='4.47' height='4.47' rx='1' fill='currentColor' />
      <rect opacity='.2' x='2.72' y='16.83' width='4.47' height='4.47' rx='1' fill='currentColor' />
      <rect
        opacity='.2'
        x='16.94'
        y='16.83'
        width='4.47'
        height='4.47'
        rx='1'
        fill='currentColor'
      />
      <rect
        x='2.72'
        y='2.63'
        width='4.47'
        height='4.47'
        rx='1'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        x='16.94'
        y='2.63'
        width='4.47'
        height='4.47'
        rx='1'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        x='2.72'
        y='16.83'
        width='4.47'
        height='4.47'
        rx='1'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        x='16.94'
        y='16.83'
        width='4.47'
        height='4.47'
        rx='1'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M4.95 7.1v9.4m2.41 2.41h9.4M19.17 7.1v9.4M7.36 4.7h9.4M12 9v6.67m1.1 0h-2.2m3.8-5.89a.8.8 0 0 0-.78-.78h-3.84a.8.8 0 0 0-.78.78'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
