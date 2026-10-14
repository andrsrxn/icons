import type { Icon } from './types'

export const IconMouseUp: Icon = ({
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
      data-slot='icon-ui-mouse-up'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path opacity='.2' d='M5.03 19.16h13.94v3.59H5.03z' fill='currentColor' />
      <path d='M5.03 22.52v-9.01a6.97 6.97 0 1 1 13.94 0v9.01' stroke='currentColor' />
      <path d='M18.97 19.35H5.03' stroke='currentColor' />
      <rect
        width='3.88'
        height='5.93'
        rx='1.94'
        transform='matrix(-1 0 0 1 13.87 10.4)'
        stroke='currentColor'
      />
      <path d='M11.96 19.31v-2.98' stroke='currentColor' />
      <path d='M11.96 10.35V7.31' stroke='currentColor' />
      <path
        d='m8.78 3.7 1.39-1.07c.88-.68 1.32-1.02 1.83-1.02.5 0 .95.34 1.83 1.02l1.39 1.07'
        stroke='currentColor'
      />
    </svg>
  )
}
