import type { Icon } from './types'

export const IconOrbit: Icon = ({
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
      data-slot='orbit'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle opacity='.2' cx='12' cy='12' r='4.18' fill='currentColor' />
      <circle opacity='.2' cx='17.9' cy='6.03' r='1.59' fill='currentColor' />
      <circle cx='12' cy='12' r='4.18' stroke='currentColor' strokeWidth='1.5' />
      <circle cx='17.9' cy='6.03' r='1.59' stroke='currentColor' strokeWidth='1.5' />
      <path
        d='M19.03 7.41A8.39 8.39 0 1 1 12 3.61c1.4 0 3.03.33 4.44 1.34'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
