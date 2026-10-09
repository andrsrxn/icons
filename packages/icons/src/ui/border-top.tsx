import type { Icon } from './types'

export const IconBorderTop: Icon = ({
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
      data-slot='icon-ui-border-top'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='20.6'
        y='2.05'
        width='18.48'
        height='18.48'
        rx='3'
        transform='rotate(90 20.6 2.05)'
        fill='currentColor'
      />
      <path d='M14.72 11.3H8' stroke='currentColor' />
      <path d='M11.36 7.93v6.73' stroke='currentColor' />
      <path
        d='M2.12 4.62a2.57 2.57 0 0 1 2.56-2.57h13.35a2.57 2.57 0 0 1 2.57 2.57'
        stroke='currentColor'
      />
      <path d='M2.07 17.9v.07a2.6 2.6 0 0 0 2.6 2.6' stroke='currentColor' />
      <path d='M20.66 18.05v.05a2.5 2.5 0 0 1-2.48 2.48' stroke='currentColor' />
      <path d='M10.2 20.52h2.26' stroke='currentColor' />
      <path d='M20.55 12.4v-2.24' stroke='currentColor' />
      <path d='M2.08 12.4v-2.24' stroke='currentColor' />
    </svg>
  )
}
