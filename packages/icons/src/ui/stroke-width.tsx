import type { Icon } from './types'

export const IconStrokeWidth: Icon = ({
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
      data-slot='icon-ui-stroke-width'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M21.38 20H2.64' stroke='currentColor' />
      <rect
        opacity='.2'
        width='3.09'
        height='18.74'
        rx='1'
        transform='matrix(0 -1 -1 0 21.36 15.67)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        width='4.69'
        height='18.74'
        rx='1'
        transform='matrix(0 -1 -1 0 21.36 8.7)'
        fill='currentColor'
      />
      <rect
        x='21.36'
        y='12.59'
        width='3.09'
        height='18.74'
        rx='1'
        transform='rotate(90 21.36 12.59)'
        stroke='currentColor'
      />
      <rect
        x='21.36'
        y='4'
        width='4.69'
        height='18.74'
        rx='1'
        transform='rotate(90 21.36 4)'
        stroke='currentColor'
      />
    </svg>
  )
}
