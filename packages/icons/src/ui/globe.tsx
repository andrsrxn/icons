import type { Icon } from './types'

export const IconGlobe: Icon = ({
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
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-globe'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle
        opacity='.2'
        cx='12'
        cy='12'
        r='10.28'
        transform='rotate(90 12 12)'
        fill='currentColor'
      />
      <circle cx='12' cy='12' r='10.28' transform='rotate(90 12 12)' stroke='currentColor' />
      <ellipse
        cx='12'
        cy='12'
        rx='10.28'
        ry='4.36'
        transform='rotate(90 12 12)'
        stroke='currentColor'
      />
      <path d='M1.72 12h20.56' stroke='currentColor' />
    </svg>
  )
}
