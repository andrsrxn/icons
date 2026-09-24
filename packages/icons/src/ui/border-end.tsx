import type { Icon } from './types'

export const IconBorderEnd: Icon = ({
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
      data-slot='icon-ui-border-end'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='21.24'
        y='21.24'
        width='18.48'
        height='18.48'
        rx='3'
        transform='rotate(-180 21.24 21.24)'
        fill='currentColor'
      />
      <path d='M12 15.37V8.63' stroke='currentColor' />
      <path d='M15.37 12H8.63' stroke='currentColor' />
      <path
        d='M18 2.76h.43a3 3 0 0 1 2.8 2.8l.01.44v12.43a3 3 0 0 1-2.8 2.8l-.44.01'
        stroke='currentColor'
      />
      <path d='M6.04 2.71H5.5a3 3 0 0 0-2.8 2.8v.45' stroke='currentColor' />
      <path d='M6.04 21.3h-.08l-.45-.01a3 3 0 0 1-2.8-2.8v-.45' stroke='currentColor' />
      <path d='M2.78 10.19v3.57' stroke='currentColor' />
      <path d='M10.23 21.2h3.57' stroke='currentColor' />
      <path d='M10.23 2.72h3.57' stroke='currentColor' />
    </svg>
  )
}
