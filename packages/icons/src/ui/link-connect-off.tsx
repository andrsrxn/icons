import type { Icon } from './types'

export const IconLinkConnectOff: Icon = ({
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
      data-slot='icon-ui-link-connect-off'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M10.48 4.83a4.95 4.95 0 0 1 4.92 4.4h1.91a4.97 4.97 0 1 1 0 9.94h-3.77a4.97 4.97 0 0 1-4.94-4.44H6.67a4.95 4.95 0 1 1 0-9.9z'
        fill='currentColor'
      />
      <rect
        width='9.94'
        height='13.71'
        rx='4.97'
        transform='matrix(0 -1 -1 0 22.28 19.17)'
        stroke='currentColor'
      />
      <rect
        width='9.9'
        height='13.71'
        rx='4.95'
        transform='matrix(0 -1 -1 0 15.43 14.73)'
        stroke='currentColor'
      />
      <path d='m2.63 2.63 18.74 18.74' stroke='currentColor' />
    </svg>
  )
}
