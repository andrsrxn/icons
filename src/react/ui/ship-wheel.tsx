import type { Icon } from './types'

export const IconShipWheel: Icon = ({
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
      data-slot='ui-icon-ship-wheel'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle opacity='.2' cx='12' cy='12' r='3.35' fill='currentColor' />
      <circle cx='12' cy='12' r='3.35' stroke='currentColor' strokeWidth={strokeWidth} />
      <circle cx='12' cy='12' r='7.83' stroke='currentColor' strokeWidth={strokeWidth} />
      <path
        d='M2.38 12h6.27m6.7 0h6.27M12 21.62v-6.26m0-6.71V2.4m7.82 17.43-5.1-5.1M9.27 9.28l-5.1-5.1m0 15.65 5.1-5.1m5.45-5.45 5.1-5.1'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
