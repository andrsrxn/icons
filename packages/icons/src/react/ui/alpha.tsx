import type { Icon } from './types'

export const IconAlpha: Icon = ({
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
      data-slot='ui-icon-alpha'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <ellipse opacity='.2' cx='9.49' cy='12' rx='6.02' ry='8.53' fill='currentColor' />
      <path
        d='M16.12 3.47c0 6.7-.4 17.06-6.67 17.06-3.98 0-6.12-4.37-6.12-8.53s2.14-8.53 6.12-8.53c9.45 0 4.06 17.06 9.18 17.06 1.78 0 2.04-1.62 2.04-2.94'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
