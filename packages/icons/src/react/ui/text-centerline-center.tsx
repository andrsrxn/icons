import type { Icon } from './types'

export const IconTextCenterlineCenter: Icon = ({
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
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-text-centerline-center'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={
        isLabelled && title && !ariaLabel ? 'text-centerline-center-title' : undefined
      }
      focusable={isLabelled ? undefined : false}
      className={`ui-icon ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? (
        <title id={'text-centerline-center-title'}>{title}</title>
      ) : null}
      <rect
        opacity='.2'
        width='6.84'
        height='6.84'
        rx='2'
        transform='matrix(-1 0 0 1 15.42 8.53)'
        fill='currentColor'
      />
      <rect
        width='6.84'
        height='6.84'
        rx='2'
        transform='matrix(-1 0 0 1 15.42 8.53)'
        stroke='currentColor'
      />
      <path
        d='M2.71 19.38H21.3M2.71 4.62h18.58M2.71 9.6h2.63m13.31 0h2.64M2.71 14.3h2.63m13.31 0h2.64'
        stroke='currentColor'
      />
    </svg>
  )
}
