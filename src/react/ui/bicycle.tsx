import type { Icon } from './types'

export const IconBicycle: Icon = ({
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
      data-slot='bicycle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle opacity='.2' cx='6.52' cy='15.33' r='3.05' fill='currentColor' />
      <circle opacity='.2' cx='17.48' cy='15.33' r='3.05' fill='currentColor' />
      <circle cx='6.52' cy='15.33' r='3.05' stroke='currentColor' strokeWidth='1.5' />
      <circle cx='17.48' cy='15.33' r='3.05' stroke='currentColor' strokeWidth='1.5' />
      <path
        d='M6.86 15.33h2.26c1.18 0 1.78 0 2.25-.3.48-.28.75-.8 1.3-1.86l2.72-5.22m-3.19 4.33L8.6 8.66m8.88 6.67L15 6m-3.96 2.66H6.86m11.63-1.98L15.02 6'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
