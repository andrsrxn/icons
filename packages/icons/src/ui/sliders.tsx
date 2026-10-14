import type { Icon } from './types'

export const IconSliders: Icon = ({
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
      data-slot='icon-ui-sliders'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='4.85'
        height='3.1'
        rx='1'
        transform='matrix(0 -1 -1 0 9.82 8.42)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        width='4.85'
        height='3.1'
        rx='1'
        transform='matrix(0 -1 -1 0 18.52 14.42)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        width='4.85'
        height='3.1'
        rx='1'
        transform='matrix(0 -1 -1 0 12.52 20.42)'
        fill='currentColor'
      />
      <path d='M21.42 6H9.82' stroke='currentColor' />
      <path d='M6.73 6H2.67' stroke='currentColor' />
      <path d='M21.42 12h-2.9' stroke='currentColor' />
      <path d='M15.42 12H2.67' stroke='currentColor' />
      <path d='M21.42 18h-8.9' stroke='currentColor' />
      <path d='M9.42 18H2.67' stroke='currentColor' />
      <rect
        width='4.85'
        height='3.1'
        rx='1'
        transform='matrix(0 -1 -1 0 9.82 8.42)'
        stroke='currentColor'
      />
      <rect
        width='4.85'
        height='3.1'
        rx='1'
        transform='matrix(0 -1 -1 0 18.52 14.42)'
        stroke='currentColor'
      />
      <rect
        width='4.85'
        height='3.1'
        rx='1'
        transform='matrix(0 -1 -1 0 12.52 20.42)'
        stroke='currentColor'
      />
    </svg>
  )
}
