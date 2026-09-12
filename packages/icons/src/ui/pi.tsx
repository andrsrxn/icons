import type { Icon } from './types'

export const IconPi: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-pi'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M20.25 3.99v.16a2 2 0 0 1-1.93 1.93H5.6a2 2 0 0 0-1.84 1.85v.34'
        stroke='currentColor'
      />
      <path d='M6 20.18s3.6.63 3.6-3.86V6.34' stroke='currentColor' />
      <path d='M14 6.34v9.74c0 2.89.86 4.1 2.26 4.1s2.17-1.05 2.34-2.1' stroke='currentColor' />
    </svg>
  )
}
