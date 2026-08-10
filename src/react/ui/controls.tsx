import type { Icon } from './types'

export const IconControls: Icon = ({
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
      data-slot='controls'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M6.85 8.16a2.21 2.21 0 1 0 4.43 0 2.21 2.21 0 0 0-4.43 0m10.31 7.67a2.23 2.23 0 1 1-4.45 0 2.23 2.23 0 0 1 4.45 0'
        fill='currentColor'
        opacity='.2'
      />
      <path
        d='M11.3 8.16a2.22 2.22 0 1 0-4.44 0m4.44 0a2.22 2.22 0 1 1-4.44 0m4.44 0h8.93m-13.37 0h-3.1m8.94 7.67a2.22 2.22 0 1 1 4.44 0m-4.44 0a2.22 2.22 0 0 0 4.44 0m-4.44 0H3.77m13.37 0h3.1'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
