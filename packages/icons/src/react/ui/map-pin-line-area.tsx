import type { Icon } from './types'

export const IconMapPinLineArea: Icon = ({
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
      data-slot='icon-ui-map-pin-line-area'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle
        opacity='.2'
        cx='12'
        cy='5.98'
        r='4.18'
        transform='rotate(90 12 5.98)'
        fill='currentColor'
      />
      <ellipse
        opacity='.2'
        cx='12.17'
        cy='18.72'
        rx='3.35'
        ry='8.84'
        transform='rotate(90 12.17 18.72)'
        fill='currentColor'
      />
      <circle cx='12' cy='5.98' r='4.18' transform='rotate(90 12 5.98)' stroke='currentColor' />
      <path
        d='M16.34 15.96c2.78.57 4.66 1.68 4.66 2.94 0 1.85-4.03 3.35-9 3.35s-9-1.5-9-3.35c0-1.26 1.88-2.37 4.66-2.94'
        stroke='currentColor'
      />
      <path d='M12 18.07v-7.91' stroke='currentColor' />
    </svg>
  )
}
