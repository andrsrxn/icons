import type { Icon } from './types'

export const IconCone: Icon = ({
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
      data-slot='icon-ui-cone'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <ellipse opacity='.2' cx='12' cy='19.21' rx='6.44' ry='3.09' fill='currentColor' />
      <path
        d='m18.62 18.68-2.8-9.07c-1.57-5.07-2.35-7.6-3.83-7.6-1.47 0-2.25 2.53-3.82 7.6l-2.79 9.07'
        stroke='currentColor'
      />
      <ellipse cx='12' cy='19.13' rx='6.69' ry='3.09' stroke='currentColor' />
    </svg>
  )
}
