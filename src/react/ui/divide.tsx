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
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
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
        d='M14.16 6.16a2.16 2.16 0 1 1-4.32 0 2.16 2.16 0 0 1 4.32 0m0 11.68a2.16 2.16 0 1 1-4.32 0 2.16 2.16 0 0 1 4.32 0'
        fill='currentColor'
        opacity='.2'
      />
      <path
        d='M3.64 12h16.72m-6.2-5.84a2.16 2.16 0 1 1-4.32 0 2.16 2.16 0 0 1 4.32 0Zm0 11.68a2.16 2.16 0 1 1-4.32 0 2.16 2.16 0 0 1 4.32 0Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
