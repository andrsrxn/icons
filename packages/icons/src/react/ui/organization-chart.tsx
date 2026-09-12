import type { Icon } from './types'

export const IconOrganizationChart: Icon = ({
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
      data-slot='icon-ui-organization-chart'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='6.57'
        height='6.57'
        rx='2'
        transform='matrix(0 -1 -1 0 15.28 9.18)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        width='6.57'
        height='6.57'
        rx='2'
        transform='matrix(0 -1 -1 0 9.13 21.39)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        width='6.57'
        height='6.57'
        rx='2'
        transform='matrix(0 -1 -1 0 21.44 21.39)'
        fill='currentColor'
      />
      <rect
        width='6.57'
        height='6.57'
        rx='2'
        transform='matrix(0 -1 -1 0 15.28 9.18)'
        stroke='currentColor'
      />
      <rect
        width='6.57'
        height='6.57'
        rx='2'
        transform='matrix(0 -1 -1 0 9.13 21.39)'
        stroke='currentColor'
      />
      <rect
        width='6.57'
        height='6.57'
        rx='2'
        transform='matrix(0 -1 -1 0 21.44 21.39)'
        stroke='currentColor'
      />
      <path
        d='M18.16 14.82c0-.82 0-1.22-.12-1.55a2 2 0 0 0-1.2-1.2c-.33-.13-.74-.13-1.56-.13H8.72c-.82 0-1.23 0-1.55.12a2 2 0 0 0-1.21 1.2c-.12.34-.12.74-.12 1.56'
        stroke='currentColor'
      />
      <path d='M12 11.35V9.18' stroke='currentColor' />
    </svg>
  )
}
