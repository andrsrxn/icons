import type { Icon } from './types'

export const IconRotate360Right: Icon = ({
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
      data-slot='icon-ui-rotate-360-right'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <ellipse
        opacity='.2'
        cx='4.03'
        cy='10.22'
        rx='4.03'
        ry='10.22'
        transform='matrix(0 1 1 0 2 8.05)'
        fill='currentColor'
      />
      <path
        d='m10.05 18.86.16-.12c1.52-1.12 2.28-1.68 2.4-2.5s-.44-1.58-1.56-3.1l-.12-.16'
        stroke='currentColor'
      />
      <path
        d='M12.22 16.11C6.58 16.11 2 14.31 2 12.08s4.58-4.03 10.22-4.03 10.22 1.8 10.22 4.03c0 1.16-1.53 2.67-4.63 3.38'
        stroke='currentColor'
      />
    </svg>
  )
}
