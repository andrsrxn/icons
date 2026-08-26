import type { Icon } from './types'

export const IconControls: Icon = ({
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
      data-slot='ui-icon-controls'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle
        opacity='.2'
        cx='8.98'
        cy='7.88'
        r='2.79'
        transform='rotate(90 8.98 7.88)'
        fill='currentColor'
      />
      <circle
        opacity='.2'
        cx='2.79'
        cy='2.79'
        r='2.79'
        transform='matrix(0 1 1 0 12.23 13.33)'
        fill='currentColor'
      />
      <path
        d='M21.5 7.88h-9.73M2.5 16.12h9.73M6.18 7.88H2.5m15.32 8.24h3.68'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <circle
        cx='8.98'
        cy='7.88'
        r='2.79'
        transform='rotate(90 8.98 7.88)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <circle
        cx='2.79'
        cy='2.79'
        r='2.79'
        transform='matrix(0 1 1 0 12.23 13.33)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
