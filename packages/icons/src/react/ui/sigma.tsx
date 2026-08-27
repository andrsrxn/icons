import type { Icon } from './types'

export const IconSigma: Icon = ({
  size = 24,
  strokeWidth = 1.5,
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
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-sigma'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M16.99 6.5v-.3c0-1.41 0-2.12-.44-2.56s-1.15-.44-2.56-.44H10.4c-2.49 0-3.74 0-4.16.8s.28 1.83 1.69 3.9l1.65 2.41c.55.82.83 1.23.83 1.69s-.28.87-.83 1.69l-1.65 2.42c-1.4 2.06-2.11 3.1-1.69 3.89.42.8 1.67.8 4.16.8H14c1.41 0 2.12 0 2.56-.44s.44-1.15.44-2.56v-.3'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
