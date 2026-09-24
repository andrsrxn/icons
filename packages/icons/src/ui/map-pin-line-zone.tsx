import type { Icon } from './types'

export const IconMapPinLineZone: Icon = ({
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
      data-slot='icon-ui-map-pin-line-zone'
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
      <path
        opacity='.2'
        d='M21.06 22.2H3.4l-.63-2.54 3.49-3.98h11.62l3.2 3.98z'
        fill='currentColor'
      />
      <circle cx='12' cy='5.98' r='4.18' transform='rotate(90 12 5.98)' stroke='currentColor' />
      <path d='M12 18.37v-8.21' stroke='currentColor' />
      <path
        d='m6.26 15.86-1.2 1.4c-1.83 2.13-2.74 3.2-2.34 4.07s1.8.88 4.62.88h9.33c2.81 0 4.22 0 4.62-.87.4-.88-.51-1.94-2.34-4.08l-1.19-1.4'
        stroke='currentColor'
      />
    </svg>
  )
}
