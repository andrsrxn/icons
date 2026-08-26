import type { Icon } from './types'

export const IconVersus: Icon = ({
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
      data-slot='ui-icon-versus'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='m16.7 3.95-4.74 8.21-4.75 8.22M3.27 3.39l1.86 5.5c.75 2.18 1.12 3.28 1.82 3.3.7 0 1.12-1.07 1.95-3.23l2.14-5.57m9.46 9.86c-.24-.88-1.35-1.54-2.65-1.54s-2.89.75-2.73 2.32c.35 3.4 5.22.76 5.45 4.13.12 1.6-1.4 2.47-2.72 2.47s-2.3-.67-2.73-1.56'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
