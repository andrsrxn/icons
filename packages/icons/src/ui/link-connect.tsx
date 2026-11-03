import type { Icon } from './types'

export const IconLinkConnect: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-link-connect'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M10.48 4.83a4.95 4.95 0 0 1 4.92 4.4h1.91a4.97 4.97 0 0 1 0 9.94h-3.77a4.97 4.97 0 0 1-4.94-4.44H6.67a4.95 4.95 0 1 1 0-9.9z'
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
    </svg>
  )
}
