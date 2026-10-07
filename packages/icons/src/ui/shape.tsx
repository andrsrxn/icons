import type { Icon } from './types'

export const IconShape: Icon = ({
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
      data-slot='icon-ui-shape'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect x='1.72' y='8.89' width='13.39' height='13.39' rx='2' stroke='currentColor' />
      <path
        opacity='.2'
        d='M15.1 16.07s.52-5.59-.77-6.84c-1.34-1.3-6.4-.34-6.4-.34a7.18 7.18 0 1 1 7.18 7.18'
        fill='currentColor'
      />
      <path d='M15.1 16.07a7.18 7.18 0 1 0-7.17-7.18' stroke='currentColor' />
    </svg>
  )
}
