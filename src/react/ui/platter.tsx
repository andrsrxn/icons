import type { Icon } from './types'

export const IconPlatter: Icon = ({
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
      data-slot='ui-icon-platter'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M19.8 16.91H4.2c0-4.86 3.5-8.8 7.8-8.8s7.8 3.94 7.8 8.8'
        fill='currentColor'
      />
      <path
        d='M19.8 16.91c0-4.86-3.5-8.8-7.8-8.8s-7.8 3.94-7.8 8.8M12 7.86v-2.1m9.76 11.15H2.24'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
