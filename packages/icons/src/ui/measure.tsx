import type { Icon } from './types'

export const IconMeasure: Icon = ({
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
      data-slot='icon-ui-measure'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='20.46'
        height='9.75'
        rx='2'
        transform='matrix(1 0 0 -1 1.77 20.15)'
        fill='currentColor'
      />
      <path d='M2.16 5.63h19.68' stroke='currentColor' />
      <path d='M2.16 7.53V3.85' stroke='currentColor' />
      <path d='M21.84 7.53V3.85' stroke='currentColor' />
      <rect
        width='20.46'
        height='9.75'
        rx='2'
        transform='matrix(1 0 0 -1 1.77 20.15)'
        stroke='currentColor'
      />
      <path d='M12.32 10.48v3.87' stroke='currentColor' />
      <path d='M7.56 10.4v3.95' stroke='currentColor' />
      <path d='M17.08 10.4v3.95' stroke='currentColor' />
    </svg>
  )
}
