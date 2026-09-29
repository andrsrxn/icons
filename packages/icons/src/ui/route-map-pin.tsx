import type { Icon } from './types'

export const IconRouteMapPin: Icon = ({
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
      data-slot='icon-ui-route-map-pin'
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
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M16.7 5.1c0 1.55 1.84 5.06 2.81 5.06s2.82-3.51 2.82-5.07a2.82 2.82 0 0 0-5.64 0'
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
        d='M20.76 9.12c-.5.66-.75.99-1.25.99s-.74-.33-1.25-1c-.79-1.03-1.67-2.5-1.67-3.92a2.92 2.92 0 0 1 5.84 0c0 1.43-.88 2.9-1.67 3.93'
        stroke='currentColor'
      />
      <path
        d='M19.51 4.84a.43.43 0 1 1 0 .85.43.43 0 0 1 0-.85'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M7.43 18.84h10.1a2.53 2.53 0 0 0 .4-5.04L5.7 11.83a2.46 2.46 0 0 1 .39-4.88l10.4-.03'
        stroke='currentColor'
      />
    </svg>
  )
}
