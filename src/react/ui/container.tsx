import type { Icon } from './types'

export const IconContainer: Icon = ({
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
      data-slot='container'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect opacity='.2' x='4.37' y='7.23' width='15.26' height='9.54' rx='2' fill='currentColor' />
      <path stroke='currentColor' strokeWidth='1.5' d='M4.64 7.23h14.73v9.54H4.64z' />
      <path
        d='M3.42 7.23h17.16M3.42 16.77h17.16M7.88 14v-3.9M12 14v-3.9m4.12 3.9v-3.9'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
