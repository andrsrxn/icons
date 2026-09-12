import type { Icon } from './types'

export const IconTextCenterlineCenter: Icon = ({
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
      data-slot='icon-ui-text-centerline-center'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
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
      <path d='M2.71 19.38H21.3' stroke='currentColor' />
      <path d='M2.71 4.62h18.58' stroke='currentColor' />
      <path d='M2.71 9.6h2.63' stroke='currentColor' />
      <path d='M18.65 9.6h2.64' stroke='currentColor' />
      <path d='M2.71 14.3h2.63' stroke='currentColor' />
      <path d='M18.65 14.3h2.64' stroke='currentColor' />
    </svg>
  )
}
