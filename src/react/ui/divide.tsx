import type { Icon } from './types'

export const IconDivide: Icon = ({
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
      data-slot='divide'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        fill='currentColor'
        d='M14.16 6.16a2.16 2.16 0 1 1-4.32 0 2.16 2.16 0 0 1 4.32 0Zm0 11.68a2.16 2.16 0 1 1-4.32 0 2.16 2.16 0 0 1 4.32 0Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M3.636 12h16.728M14.16 6.16a2.16 2.16 0 1 1-4.32 0 2.16 2.16 0 0 1 4.32 0Zm0 11.68a2.16 2.16 0 1 1-4.32 0 2.16 2.16 0 0 1 4.32 0Z'
      />
    </svg>
  )
}
