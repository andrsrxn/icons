import type { Icon } from './types'

export const IconComb: Icon = ({
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
      data-slot='icon-ui-comb'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='20.94'
        height='3.75'
        rx='1'
        transform='matrix(.7071 -.7071 .72762 .68598 5.01 20.28)'
        fill='currentColor'
      />
      <path
        d='m2.15 17.6 1.31 1.3c2 2 3 3 4.24 3s2.25-1 4.25-3l6.64-6.64c2-2 3-3 3-4.25 0-1.24-1-2.24-3-4.24l-1.3-1.3'
        stroke='currentColor'
      />
      <path d='M19.82 5.48 5.17 20.13' stroke='currentColor' />
      <path d='m13.53 6.22 2.77 2.77' stroke='currentColor' />
      <path d='m9.72 10.03 2.77 2.77' stroke='currentColor' />
      <path d='m5.91 13.83 2.78 2.78' stroke='currentColor' />
    </svg>
  )
}
