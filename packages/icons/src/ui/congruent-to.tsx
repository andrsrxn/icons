import type { Icon } from './types'

export const IconCongruentTo: Icon = ({
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
      data-slot='icon-ui-congruent-to'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M21.38 12H2.62' stroke='currentColor' />
      <path d='M21.38 18H2.62' stroke='currentColor' />
      <path
        d='M2.7 6.44a9 9 0 0 1 5.5-1.73c2.73 0 6 2.22 8.67 2.22s3.9-1.2 4.42-1.85'
        stroke='currentColor'
      />
    </svg>
  )
}
