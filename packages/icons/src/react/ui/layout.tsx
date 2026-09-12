import type { Icon } from './types'

export const IconLayout: Icon = ({
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
      data-slot='icon-ui-layout'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect opacity='.2' x='2.58' y='2.67' width='7.97' height='10.73' rx='2' fill='currentColor' />
      <rect
        opacity='.2'
        width='7.97'
        height='10.73'
        rx='2'
        transform='matrix(1 0 0 -1 13.45 21.33)'
        fill='currentColor'
      />
      <rect opacity='.2' x='2.58' y='16.25' width='7.97' height='5.09' rx='2' fill='currentColor' />
      <rect
        opacity='.2'
        width='7.97'
        height='5.08'
        rx='2'
        transform='matrix(1 0 0 -1 13.45 7.75)'
        fill='currentColor'
      />
      <rect x='2.58' y='2.67' width='7.97' height='10.73' rx='2' stroke='currentColor' />
      <rect
        width='7.97'
        height='10.73'
        rx='2'
        transform='matrix(1 0 0 -1 13.45 21.33)'
        stroke='currentColor'
      />
      <rect x='2.58' y='16.25' width='7.97' height='5.09' rx='1.5' stroke='currentColor' />
      <rect
        width='7.97'
        height='5.08'
        rx='1.5'
        transform='matrix(1 0 0 -1 13.45 7.75)'
        stroke='currentColor'
      />
    </svg>
  )
}
