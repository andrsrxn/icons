import type { Icon } from './types'

export const IconClosedCaptioning: Icon = ({
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
      data-slot='closed-captioning'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M3.71 10.49c0-1.89 0-2.83.59-3.42.58-.58 1.53-.58 3.41-.58h8.58c1.88 0 2.83 0 3.41.58.59.59.59 1.53.59 3.42v3.02c0 1.89 0 2.83-.59 3.42-.58.58-1.53.58-3.41.58H7.7c-1.88 0-2.83 0-3.41-.58-.59-.59-.59-1.53-.59-3.42z'
        fill='currentColor'
      />
      <path
        d='M10.53 9.54c-1.66 0-3.43 0-3.43 2.46s1.85 2.46 3.43 2.46m5.88-4.92c-1.66 0-3.43 0-3.43 2.46s1.85 2.46 3.43 2.46m-8.7 3.05h8.58c1.88 0 2.83 0 3.41-.58.59-.59.59-1.53.59-3.42V10.5c0-1.89 0-2.83-.59-3.42-.58-.58-1.53-.58-3.41-.58H7.7c-1.88 0-2.83 0-3.41.58-.59.59-.59 1.53-.59 3.42v3.02c0 1.89 0 2.83.59 3.42.58.58 1.53.58 3.41.58Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
