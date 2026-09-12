import type { Icon } from './types'

export const IconAccessibility: Icon = ({
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
      data-slot='icon-ui-accessibility'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m5.75 8.55 3.72 1.48c1.23.48 1.84.72 2.18 1.23s.35 1.17.35 2.49v1.89c0 .69 0 1.03-.11 1.35s-.33.59-.75 1.13l-3.3 4.18'
        stroke='currentColor'
      />
      <path
        d='m18.25 8.55-3.72 1.48c-1.23.48-1.84.72-2.18 1.23S12 12.43 12 13.75v1.89c0 .69 0 1.03.11 1.35s.33.59.75 1.13l3.3 4.18'
        stroke='currentColor'
      />
      <circle
        opacity='.2'
        cx='12'
        cy='4.58'
        r='2.88'
        transform='rotate(90 12 4.58)'
        fill='currentColor'
      />
      <circle cx='12' cy='4.58' r='2.88' transform='rotate(90 12 4.58)' stroke='currentColor' />
    </svg>
  )
}
