import type { Icon } from './types'

export const IconVr: Icon = ({
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
      data-slot='icon-ui-vr'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M21.52 20.53H2.48' stroke='currentColor' />
      <path d='M21.52 3.5H2.48' stroke='currentColor' />
      <path d='m3.38 7 3.79 10' stroke='currentColor' />
      <path d='M10.96 7 7.17 17' stroke='currentColor' />
      <path d='M13.96 7v10' stroke='currentColor' />
      <path
        d='M14 7h3.56c1.49 0 2.7 1.29 2.7 2.87a2.8 2.8 0 0 1-2.7 2.86H14'
        stroke='currentColor'
      />
      <path d='m16.23 12.9 4.03 4.1' stroke='currentColor' />
    </svg>
  )
}
