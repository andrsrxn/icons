import type { Icon } from './types'

export const IconHq: Icon = ({
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
      data-slot='icon-ui-hq'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M10 7.18v9.67' stroke='currentColor' />
      <path d='M3.49 7.18v9.67' stroke='currentColor' />
      <path d='M3.49 12.02H10' stroke='currentColor' />
      <path d='M21.54 20.55H2.46' stroke='currentColor' />
      <path d='M21.54 3.48H2.46' stroke='currentColor' />
      <path d='m16.97 13.1 4.57 4' stroke='currentColor' />
      <rect
        width='10.16'
        height='7.28'
        rx='3.64'
        transform='matrix(0 -1 -1 0 20.37 17.1)'
        stroke='currentColor'
      />
    </svg>
  )
}
