import type { Icon } from './types'

export const IconTextItems: Icon = ({
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
      data-slot='text-items'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect opacity='.2' x='3.92' y='4.21' width='6.16' height='6.16' rx='2' fill='currentColor' />
      <rect opacity='.2' x='3.92' y='13.63' width='6.16' height='6.16' rx='2' fill='currentColor' />
      <rect
        x='3.92'
        y='4.21'
        width='6.16'
        height='6.16'
        rx='2'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <rect
        x='3.92'
        y='13.63'
        width='6.16'
        height='6.16'
        rx='2'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M20.39 5.5h-7.43m7.43 9.42h-7.43M18.38 9h-5.42m5.42 9.4h-5.42'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
