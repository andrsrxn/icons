import type { Icon } from './types'

export const IconPlay: Icon = ({
  size = 24,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='play'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        fill='currentColor'
        d='M4.964 14.848V9.087c0-3.03 0-4.544.986-5.124.986-.58 2.31.156 4.958 1.628l5.083 2.826c2.736 1.521 4.104 2.282 4.113 3.447.01 1.166-1.346 1.948-4.057 3.513l-5.083 2.935c-2.666 1.54-4 2.31-5 1.732-1-.577-1-2.117-1-5.196Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M4.964 14.848V9.087c0-3.03 0-4.544.986-5.124.986-.58 2.31.156 4.958 1.628l5.083 2.826c2.736 1.521 4.104 2.282 4.113 3.447.01 1.166-1.346 1.948-4.057 3.513l-5.083 2.935c-2.666 1.54-4 2.31-5 1.732-1-.577-1-2.117-1-5.196Z'
      />
    </svg>
  )
}
