import type { Icon } from './types'

export const IconPlay: Icon = ({
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
      data-slot='play'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M4.96 14.85V9.09c0-3.03 0-4.55.99-5.13s2.31.16 4.96 1.63l5.08 2.83c2.74 1.52 4.1 2.28 4.11 3.44s-1.34 1.95-4.05 3.52l-5.09 2.93c-2.66 1.54-4 2.31-5 1.73-1-.57-1-2.11-1-5.2'
        fill='currentColor'
      />
      <path
        d='M4.96 14.85V9.09c0-3.03 0-4.55.99-5.13s2.31.16 4.96 1.63l5.08 2.83c2.74 1.52 4.1 2.28 4.11 3.44s-1.34 1.95-4.05 3.52l-5.09 2.93c-2.66 1.54-4 2.31-5 1.73-1-.57-1-2.11-1-5.2Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
