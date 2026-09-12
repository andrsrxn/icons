import type { Icon } from './types'

export const IconCoin: Icon = ({
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
      data-slot='icon-ui-coin'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <ellipse
        opacity='.2'
        cx='10.07'
        cy='12'
        rx='10.18'
        ry='4.93'
        transform='rotate(90 10.07 12)'
        fill='currentColor'
      />
      <ellipse
        cx='10.07'
        cy='12'
        rx='10.18'
        ry='4.93'
        transform='rotate(90 10.07 12)'
        stroke='currentColor'
      />
      <path
        d='M14.74 22.18c2.73 0 4.94-4.56 4.94-10.18S17.47 1.82 14.74 1.82'
        stroke='currentColor'
      />
      <path d='M10.07 1.82h4.67' stroke='currentColor' />
      <path d='M14.13 5.76h4.32' stroke='currentColor' />
      <path d='M15.36 12h4.32' stroke='currentColor' />
      <path d='M14.13 18.21h4.32' stroke='currentColor' />
      <path d='M10.07 22.18h4.67' stroke='currentColor' />
    </svg>
  )
}
