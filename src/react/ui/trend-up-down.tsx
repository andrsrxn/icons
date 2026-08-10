import type { Icon } from './types'

export const IconTrendUpDown: Icon = ({
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
      data-slot='trend-up-down'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M20.22 9.77V6.25c0-.84-.68-1.52-1.52-1.52h-3.48M3.51 14.2l5.04-5.05c.4-.4 1.05-.4 1.45.01l2.29 2.36c.4.41 1.06.4 1.45 0l6.07-6.31m.41 9.02v3.52c0 .84-.68 1.52-1.52 1.52h-3.48m.19-4.89 4.4 4.41'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
