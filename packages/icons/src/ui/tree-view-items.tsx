import type { Icon } from './types'

export const IconTreeViewItems: Icon = ({
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
      data-slot='icon-ui-tree-view-items'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='6.93'
        height='6.93'
        rx='2'
        transform='matrix(0 -1 -1 0 18.63 10.87)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        width='6.93'
        height='6.93'
        rx='2'
        transform='matrix(0 -1 -1 0 18.63 22.33)'
        fill='currentColor'
      />
      <rect
        width='6.93'
        height='6.93'
        rx='2'
        transform='matrix(0 -1 -1 0 18.63 10.87)'
        stroke='currentColor'
      />
      <rect
        width='6.93'
        height='6.93'
        rx='2'
        transform='matrix(0 -1 -1 0 18.63 22.33)'
        stroke='currentColor'
      />
      <path
        d='M5.37 1.67v11.2c0 2.83 0 4.24.87 5.12.88.88 2.3.88 5.13.88h.28'
        stroke='currentColor'
      />
      <path d='M11.65 7.1H5.6' stroke='currentColor' />
    </svg>
  )
}
