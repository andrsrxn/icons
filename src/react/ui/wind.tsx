import type { Icon } from './types'

export const IconWind: Icon = ({
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
      data-slot='wind'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M7.19 7.01c.14-1.41 1.2-2.3 2.69-2.3a2.7 2.7 0 0 1 0 5.38H3.53m12.81 3.65c.22.6.9 1.35 1.94 1.35a2.1 2.1 0 0 0 0-4.2h-4.3m-4.81 6.13c.17 1 1.2 2.24 2.69 2.24a2.7 2.7 0 1 0 0-5.38H3.53'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
