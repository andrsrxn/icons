import type { Icon } from './types'

export const IconTreeView: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-tree-view'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        width='5.03'
        height='4.65'
        rx='1.5'
        transform='matrix(0 -1 -1 0 10.62 7.64)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        width='5.03'
        height='4.65'
        rx='1.5'
        transform='matrix(0 -1 -1 0 18.03 13.76)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        width='5.03'
        height='4.65'
        rx='1.5'
        transform='matrix(0 -1 -1 0 18.03 21.5)'
        fill='currentColor'
      />
      <rect
        width='5.03'
        height='4.65'
        rx='1.5'
        transform='matrix(0 -1 -1 0 10.62 7.64)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        width='5.03'
        height='4.65'
        rx='1.5'
        transform='matrix(0 -1 -1 0 18.03 13.76)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        width='5.03'
        height='4.65'
        rx='1.5'
        transform='matrix(0 -1 -1 0 18.03 21.5)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M8.3 7.64v6.34c0 1.96 0 2.93.43 3.65a3 3 0 0 0 1 1c.72.44 1.7.44 3.65.44m-.87-7.83H8.74'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
