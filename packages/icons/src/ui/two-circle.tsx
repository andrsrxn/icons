import type { Icon } from './types'

export const IconTwoCircle: Icon = ({
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
      data-slot='icon-ui-two-circle'
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
        r='10.22'
        transform='rotate(90 12 12)'
        fill='currentColor'
      />
      <circle cx='12' cy='12' r='10.22' transform='rotate(90 12 12)' stroke='currentColor' />
      <path
        d='M9.54 8.66c.78-.84 1.52-1.49 3.11-1.49 2.82 0 3.27 2.93 1.86 4.4-.95 1-3 2.57-4.33 3.94-.46.47-.68.7-.55 1.01.13.3.48.3 1.19.3h4.47'
        stroke='currentColor'
      />
    </svg>
  )
}
