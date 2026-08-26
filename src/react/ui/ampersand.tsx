import type { Icon } from './types'

export const IconAmpersand: Icon = ({
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
      data-slot='ui-icon-ampersand'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='m18.3 20.07-7.95-8.5L7.9 9.12a3.47 3.47 0 0 1 4.9-4.9 3.46 3.46 0 0 1-.02 4.9l-.3.29'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m18.16 13.04-4.8 6.43a3.88 3.88 0 1 1-5.86-5.08l5.34-5.34'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
