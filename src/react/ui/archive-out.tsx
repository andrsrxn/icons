import type { Icon } from './types'

export const IconArchiveOut: Icon = ({
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
      data-slot='ui-icon-archive-out'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        width='13.31'
        height='18.56'
        rx='3'
        transform='matrix(0 -1 -1 0 21.28 20.66)'
        fill='currentColor'
      />
      <rect
        width='13.31'
        height='18.56'
        rx='3'
        transform='matrix(0 -1 -1 0 21.28 20.66)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m20.54 8.34-.25-.5c-1.06-2.19-1.6-3.28-2.57-3.89-.97-.6-2.19-.6-4.62-.6h-2.16c-2.3 0-3.46 0-4.4.55-.94.56-1.5 1.57-2.6 3.6l-.48.84m11.8 5.1-.43-.43c-1.33-1.34-2-2-2.83-2s-1.5.66-2.83 2l-.43.43M12 17.17v-5.92'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
