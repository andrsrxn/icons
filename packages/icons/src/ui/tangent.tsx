import type { Icon } from './types'

export const IconTangent: Icon = ({
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
      data-slot='icon-ui-tangent'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M1.47 13.4H21.4' stroke='currentColor' />
      <path d='M11.43 21.14V3.44' stroke='currentColor' />
      <path d='M11.44 8.81c-5.1 0-1.91 7.71-7.06 10.24' stroke='currentColor' />
      <path d='M11.43 8.81c5.13 0 1.92 7.71 7.06 10.24' stroke='currentColor' />
      <path
        d='m14.15 5.07-.59-.6c-1-1-1.5-1.5-2.12-1.5s-1.12.5-2.12 1.5l-.6.6'
        stroke='currentColor'
      />
      <path
        d='m20.04 16.12.6-.6c1-1 1.5-1.5 1.5-2.12s-.5-1.12-1.5-2.12l-.6-.6'
        stroke='currentColor'
      />
    </svg>
  )
}
