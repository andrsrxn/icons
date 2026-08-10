import type { Icon } from './types'

export const IconContactlessPay: Icon = ({
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
      data-slot='contactless-pay'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M3.67 12a8.33 8.33 0 1 0 16.66 0 8.33 8.33 0 0 0-16.66 0'
        fill='currentColor'
      />
      <path
        d='M8.1 9.92a4.4 4.4 0 0 1 0 4.16m6.14-6.94a10.3 10.3 0 0 1 0 9.72m-3.1-8.33a7.4 7.4 0 0 1 0 6.94m.86 4.86a8.33 8.33 0 1 1 0-16.66 8.33 8.33 0 0 1 0 16.66'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
