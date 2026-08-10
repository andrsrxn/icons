import type { Icon } from './types'

export const IconCopyright: Icon = ({
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
      data-slot='copyright'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle opacity='.2' cx='12' cy='12' r='8.43' fill='currentColor' />
      <circle cx='12' cy='12' r='8.43' stroke='currentColor' strokeWidth='1.5' />
      <path
        d='M14.31 8.07c-.77-.45-1.93-.45-1.93-.45A4.47 4.47 0 0 0 7.82 12a4.47 4.47 0 0 0 4.56 4.38s1.29 0 1.93-.37'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
