import type { Icon } from './types'

export const IconSubsetProperOf: Icon = ({
  size = 24,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='subset-proper-of'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M19.205 5.612H10.87a6.31 6.31 0 0 0-2.903.708c-4.34 2.25-4.58 8.37-.428 10.952l.227.141a6.458 6.458 0 0 0 3.41.974h8.028'
      />
    </svg>
  )
}
