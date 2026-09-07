import type { Icon } from './types'

export const IconGlobe: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

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
      data-slot='icon-ui-globe'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={isLabelled && title && !ariaLabel ? 'globe-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? <title id={'globe-title'}>{title}</title> : null}
      <circle
        opacity='.2'
        cx='12'
        cy='12'
        r='9.43'
        transform='rotate(90 12 12)'
        fill='currentColor'
      />
      <circle cx='12' cy='12' r='9.43' transform='rotate(90 12 12)' stroke='currentColor' />
      <ellipse
        cx='12'
        cy='12'
        rx='9.43'
        ry='4'
        transform='rotate(90 12 12)'
        stroke='currentColor'
      />
      <path d='M2.57 12h18.86' stroke='currentColor' />
    </svg>
  )
}
