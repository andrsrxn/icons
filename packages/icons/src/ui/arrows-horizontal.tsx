import type { Icon } from './types'

export const IconArrowsHorizontal: Icon = ({
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
      data-slot='icon-ui-arrows-horizontal'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m18.24 7.18 1.98 1.99c1.34 1.33 2 2 2 2.83 0 .82-.66 1.5-2 2.83l-1.98 1.99'
        stroke='currentColor'
      />
      <path
        d='m5.8 7.18-2 1.99c-1.33 1.33-2 2-2 2.83 0 .82.67 1.5 2 2.83l2 1.99'
        stroke='currentColor'
      />
      <path d='M1.98 12h20.04' stroke='currentColor' />
    </svg>
  )
}
