import type { Icon } from './types'

export const IconRouteMapCheck: Icon = ({
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
      data-slot='icon-ui-route-map-check'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle
        opacity='.2'
        cx='2.89'
        cy='2.89'
        r='2.89'
        transform='matrix(1 0 0 -1 1.67 21.73)'
        fill='currentColor'
      />
      <circle
        cx='2.89'
        cy='2.89'
        r='2.89'
        transform='matrix(1 0 0 -1 1.67 21.73)'
        stroke='currentColor'
      />
      <path
        d='M7.43 18.84h10.1a2.53 2.53 0 0 0 .4-5.04L5.7 11.83a2.45 2.45 0 0 1 .4-4.88H14'
        stroke='currentColor'
      />
      <path
        d='m17.48 7.33.04.06c.74 1.02 1.11 1.52 1.62 1.52.5 0 .88-.5 1.61-1.52l1.9-2.61'
        stroke='currentColor'
      />
    </svg>
  )
}
