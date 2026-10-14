import type { Icon } from './types'

export const IconCentCircle: Icon = ({
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
      data-slot='icon-ui-cent-circle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M1.69 12.1a10.31 10.31 0 1 0 20.62 0 10.31 10.31 0 0 0-20.62 0'
        fill='currentColor'
      />
      <path
        d='M15.36 7.24a6 6 0 0 0-2.62-.6c-3.18 0-5.76 2.45-5.76 5.47s2.58 5.46 5.76 5.46q1.42-.01 2.62-.6'
        stroke='currentColor'
      />
      <path d='M11.48 18.8V5.4' stroke='currentColor' />
      <path
        d='M1.7 12.1A10.3 10.3 0 0 0 12 22.43 10.31 10.31 0 1 0 1.7 12.1'
        stroke='currentColor'
      />
    </svg>
  )
}
