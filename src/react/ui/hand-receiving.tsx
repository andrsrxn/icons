import type { Icon } from './types'

export const IconHandReceiving: Icon = ({
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
      data-slot='hand-receiving'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect opacity='.2' x='3.78' y='8.39' width='3.38' height='7.14' rx='1' fill='currentColor' />
      <path
        d='M7.16 14.33s.98.82 2.37 1.16c2.78.68 4.2.5 6.67-.41 1.84-.68 3.28-2.5 3.99-3.55.3-.46.3-1.05.03-1.53a1.72 1.72 0 0 0-2.64-.39 22 22 0 0 1-3.03 2.35c-.66.4-2.02.32-3.32.32m3.32-.32c.53-1.41.37-2.54-.21-2.77a9 9 0 0 0-3.4-.56c-3.15 0-3.78.79-3.78.79'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <rect
        x='3.78'
        y='8.39'
        width='3.38'
        height='7.14'
        rx='1'
        stroke='currentColor'
        strokeWidth='1.5'
      />
    </svg>
  )
}
