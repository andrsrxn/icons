import type { Icon } from './types'

export const IconCloud: Icon = ({
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
      data-slot='ui-icon-cloud'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M2.44 14 5 17l13 .44 3-1.94v-3.9l-3-2.14-1.57 1.1-.84-3.17L12 5.33l-3 1.3-1.5 2.84-3.5 1.1z'
        fill='currentColor'
      />
      <path
        d='M7.3 9.1a4.62 4.62 0 0 1 8.48-1.07c.76 1.31.73 2.64.55 3.53m-9.85 5.68a3.87 3.87 0 1 1 0-7.77c1.27 0 2.4.6 3.11 1.55'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M16.46 9.88c.97-.5 2.15-.42 3.07.1a3.9 3.9 0 0 1 1.42 5.32c-.63 1.1-1.61 1.93-2.89 1.93m.17.01H6.33'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
