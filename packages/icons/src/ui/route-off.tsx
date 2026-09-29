import type { Icon } from './types'

export const IconRouteOff: Icon = ({
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
      data-slot='icon-ui-route-off'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle
        opacity='.2'
        cx='2.71'
        cy='2.71'
        r='2.71'
        transform='matrix(1 0 0 -1 16.07 8.36)'
        fill='currentColor'
      />
      <circle
        opacity='.2'
        cx='2.71'
        cy='2.71'
        r='2.71'
        transform='matrix(1 0 0 -1 2.51 21.06)'
        fill='currentColor'
      />
      <circle
        cx='2.71'
        cy='2.71'
        r='2.71'
        transform='matrix(1 0 0 -1 16.07 8.36)'
        stroke='currentColor'
      />
      <circle
        cx='2.71'
        cy='2.71'
        r='2.71'
        transform='matrix(1 0 0 -1 2.51 21.06)'
        stroke='currentColor'
      />
      <path
        d='M8.09 18.64h9.37a2.68 2.68 0 0 0 .5-5.31L5.88 11.02a2.7 2.7 0 0 1 .51-5.37h9.58'
        stroke='currentColor'
      />
      <path d='m2.74 2.74 18.52 18.52' stroke='currentColor' />
    </svg>
  )
}
