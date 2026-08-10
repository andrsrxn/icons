import type { Icon } from './types'

export const IconJupiter: Icon = ({
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
      data-slot='jupiter'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle opacity='.2' cx='11.73' cy='11.89' r='7.3' fill='currentColor' />
      <circle cx='11.73' cy='11.89' r='7.3' stroke='currentColor' strokeWidth='1.5' />
      <path
        d='M15.74 5.23c2.1-1.24 3.72-1.7 4.3-1.07 1.04 1.14-1.81 5.46-6.37 9.65S4.55 20.48 3.5 19.34c-.55-.6-.03-2.07 1.25-3.95'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
