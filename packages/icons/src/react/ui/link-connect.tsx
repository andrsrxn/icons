import type { Icon } from './types'

export const IconLinkConnect: Icon = ({
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
      data-slot='icon-ui-link-connect'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        width='9.94'
        height='13.71'
        rx='4.97'
        transform='matrix(0 -1 -1 0 22.28 19.17)'
        stroke='#000'
      />
      <rect
        width='9.9'
        height='13.71'
        rx='4.95'
        transform='matrix(0 -1 -1 0 15.43 14.73)'
        stroke='#000'
      />
    </svg>
  )
}
