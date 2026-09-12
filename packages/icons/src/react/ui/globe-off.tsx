import type { Icon } from './types'

export const IconGlobeOff: Icon = ({
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
      data-slot='icon-ui-globe-off'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle
        opacity='.2'
        cx='12'
        cy='12'
        r='10.23'
        transform='rotate(90 12 12)'
        fill='currentColor'
      />
      <circle cx='12' cy='12' r='10.23' transform='rotate(90 12 12)' stroke='currentColor' />
      <ellipse
        cx='12'
        cy='12'
        rx='10.23'
        ry='4.34'
        transform='rotate(90 12 12)'
        stroke='currentColor'
      />
      <path d='M1.77 12h20.46' stroke='currentColor' />
      <path d='M2.71 2.71 21.3 21.3' stroke='currentColor' />
    </svg>
  )
}
