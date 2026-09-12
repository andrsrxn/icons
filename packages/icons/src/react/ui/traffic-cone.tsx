import type { Icon } from './types'

export const IconTrafficCone: Icon = ({
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
      data-slot='icon-ui-traffic-cone'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m8.31 10.37.18-.41a2 2 0 0 1 2.27-1.18l.84.18a2 2 0 0 0 .8.01l1.06-.2a2 2 0 0 1 2.28 1.31l.12.38A2 2 0 0 1 14.61 13l-1.97.67a2 2 0 0 1-1.28 0l-1.84-.62a2 2 0 0 1-1.2-2.68'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='m2.34 16.74 4.4-2.33v2.7L12 19.23l5-2.1-.26-2.71 4.66 2.33.26 1.28-9.66 4.5-9.41-4.51z'
        fill='currentColor'
      />
      <path
        d='m6.63 14.74-1.13.49c-2.1.9-3.15 1.36-3.16 2.13 0 .77 1.04 1.24 3.13 2.18l.76.34 3.97 1.86c.45.2 1.2.52 1.8.52.54 0 1.46-.37 1.9-.58l3.87-1.8.76-.34c2.09-.94 3.13-1.4 3.13-2.18-.01-.77-1.06-1.23-3.16-2.13l-1-.49'
        stroke='currentColor'
      />
      <path
        d='m17.16 14.32-1.32-4.54c-1.57-5.34-2.35-8-3.85-8s-2.27 2.67-3.83 8l-1.33 4.54c-.33 1.13-.5 1.7-.17 2.38.33.69.74.87 1.55 1.22a9.8 9.8 0 0 0 7.58 0c.81-.35 1.22-.53 1.55-1.22.32-.68.15-1.25-.18-2.38'
        stroke='currentColor'
      />
      <path d='M16.45 12.36S14.85 13.7 12 13.7c-2.84 0-4.45-1.34-4.45-1.34' stroke='currentColor' />
      <path d='M15.1 8.17s-1.12.93-3.1.93-3.1-.93-3.1-.93' stroke='currentColor' />
    </svg>
  )
}
