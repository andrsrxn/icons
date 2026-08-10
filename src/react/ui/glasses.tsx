import type { Icon } from './types'

export const IconGlasses: Icon = ({
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
      data-slot='glasses'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M10.18 14.13a3.35 3.35 0 1 1-6.7 0 3.35 3.35 0 0 1 6.7 0m10.34 0a3.35 3.35 0 1 1-6.7 0 3.35 3.35 0 0 1 6.7 0'
        fill='currentColor'
        opacity='.2'
      />
      <path
        d='M10.18 13.83s1-.7 1.82-.7c.81 0 1.83.7 1.83.7m-9.91-1.38 2.76-5.27c.5-.96 1.9-.9 2.32.1m11.08 5.17-2.76-5.27c-.5-.96-1.9-.9-2.32.1m-4.82 6.85a3.35 3.35 0 1 1-6.7 0 3.35 3.35 0 0 1 6.7 0m10.34 0a3.35 3.35 0 1 1-6.7 0 3.35 3.35 0 0 1 6.7 0'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
