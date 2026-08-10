import type { Icon } from './types'

export const IconBounceRight: Icon = ({
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
      data-slot='bounce-right'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle opacity='.2' cx='17.84' cy='7.75' r='2.63' fill='currentColor' />
      <path
        d='M3.49 14.1A5 5 0 0 1 6.3 16a8 8 0 0 1 1.45 2.8s.35-3.54 1.38-5.25A8.2 8.2 0 0 1 13 10'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <circle cx='17.84' cy='7.75' r='2.63' stroke='currentColor' strokeWidth='1.5' />
    </svg>
  )
}
