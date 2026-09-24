import type { Icon } from './types'

export const IconBorderNone: Icon = ({
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
      data-slot='icon-ui-border-none'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='21.24'
        y='2.76'
        width='18.48'
        height='18.48'
        rx='3'
        transform='rotate(90 21.24 2.76)'
        fill='currentColor'
      />
      <path d='M12 15.36V8.63' stroke='currentColor' />
      <path d='M15.37 12H8.63' stroke='currentColor' />
      <path d='M6.03 2.66h-.08l-.45.01a3 3 0 0 0-2.8 2.8v.45' stroke='currentColor' />
      <path
        d='M17.98 2.66h.07c1.17 0 1.76 0 2.2.24a2 2 0 0 1 .82.82c.23.44.23 1.03.23 2.2'
        stroke='currentColor'
      />
      <path d='M6.03 21.24H5.5a3 3 0 0 1-2.8-2.8V18' stroke='currentColor' />
      <path
        d='M17.98 21.24h.07c1.17 0 1.76 0 2.2-.23a2 2 0 0 0 .82-.82c.23-.44.23-1.03.23-2.2'
        stroke='currentColor'
      />
      <path d='M2.76 10.14v3.57' stroke='currentColor' />
      <path d='M21.24 10.14v3.57' stroke='currentColor' />
      <path d='M10.22 21.14h3.57' stroke='currentColor' />
      <path d='M10.22 2.67h3.57' stroke='currentColor' />
    </svg>
  )
}
