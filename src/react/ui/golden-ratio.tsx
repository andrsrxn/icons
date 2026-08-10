import type { Icon } from './types'

export const IconGoldenRatio: Icon = ({
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
      data-slot='golden-ratio'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M3.62 17c0-4.22 3.13-9.69 9.05-9.96 5.5-.25 8.2 3.28 7.6 6.56a4.2 4.2 0 0 1-4.13 3.6c-3.2.18-4.14-2.04-4.04-3.4.13-1.82 1.45-2.7 2.66-2.7s2.36 1.17 1.56 2.7'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
