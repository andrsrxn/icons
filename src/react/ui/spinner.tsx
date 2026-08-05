import type { Icon } from './types'

export const IconSpinner: Icon = ({
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
      data-slot='spinner'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12 20.495v-3.04m-6.007.552 2.15-2.15M6.545 12h-3.04m4.638-3.857-2.15-2.15M12 6.545v-3.04m3.857 4.638 2.15-2.15m0 12.014-2.15-2.15M20.495 12h-3.04'
      />
    </svg>
  )
}
