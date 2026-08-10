import type { Icon } from './types'

export const IconTextPhonetic: Icon = ({
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
      data-slot='text-phonetic'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect opacity='.2' x='12.63' y='5.76' width='7.21' height='6.07' rx='1' fill='currentColor' />
      <rect opacity='.2' x='4.17' y='12.24' width='7.21' height='6.08' rx='1' fill='currentColor' />
      <path
        d='M11.85 11.98h-3.3c-2.19 0-4.88.3-4.88 3.62a3.2 3.2 0 0 0 3.19 3.19h.9a4.1 4.1 0 0 0 4.09-4.1V9.56c0-2.4-1.94-4.34-4.34-4.34h-.26c-1.55 0-2.95.9-3.58 2.31M12.15 12s.3.02 3.3.02c3.84 0 4.88 0 4.88-3.62a3.2 3.2 0 0 0-3.19-3.19h-.9a4.1 4.1 0 0 0-4.09 4.1v5.14c0 2.4 1.94 4.34 4.34 4.34h.26c1.55 0 2.95-.9 3.58-2.31'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
