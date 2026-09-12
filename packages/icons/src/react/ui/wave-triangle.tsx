import type { Icon } from './types'

export const IconWaveTriangle: Icon = ({
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
      data-slot='icon-ui-wave-triangle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M2.73 7.99C4.29 5.43 5.06 4.15 6.2 4.16c1.13 0 1.89 1.3 3.4 3.88l4.49 7.65c1.57 2.69 2.36 4.03 3.52 4.01 1.17 0 1.92-1.37 3.43-4.1l.23-.41'
        stroke='currentColor'
      />
    </svg>
  )
}
