import type { Icon } from './types'

export const IconTreeView: Icon = ({
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
      data-slot='icon-ui-tree-view'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='5.15'
        height='5.15'
        rx='1.5'
        transform='matrix(0 -1 -1 0 10.46 6.94)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        width='5.15'
        height='5.15'
        rx='1.5'
        transform='matrix(0 -1 -1 0 18.74 13.78)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        width='5.15'
        height='5.15'
        rx='1.5'
        transform='matrix(0 -1 -1 0 18.74 22.3)'
        fill='currentColor'
      />
      <rect
        width='5.15'
        height='5.15'
        rx='1.5'
        transform='matrix(0 -1 -1 0 10.46 6.94)'
        stroke='currentColor'
      />
      <rect
        width='5.15'
        height='5.15'
        rx='1.5'
        transform='matrix(0 -1 -1 0 18.74 13.78)'
        stroke='currentColor'
      />
      <rect
        width='5.15'
        height='5.15'
        rx='1.5'
        transform='matrix(0 -1 -1 0 18.74 22.3)'
        stroke='currentColor'
      />
      <path
        d='M7.86 6.94v7.1c0 2.52 0 3.78.71 4.62a3 3 0 0 0 .35.35c.84.7 2.1.7 4.62.7'
        stroke='currentColor'
      />
      <path d='M13.54 10.97H8.08' stroke='currentColor' />
    </svg>
  )
}
