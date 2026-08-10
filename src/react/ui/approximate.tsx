import type { Icon } from './types'

export const IconApproximate: Icon = ({
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
      data-slot='approximate'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M3.64 10.32s1.8-1.85 4.64-1.85c2.86 0 5.55 1.85 8.36 1.85 2.82 0 3.72-1.85 3.72-1.85M3.64 15.53s1.8-1.85 4.64-1.85c2.86 0 5.55 1.85 8.36 1.85 2.82 0 3.72-1.85 3.72-1.85'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
