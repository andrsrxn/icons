import type { Icon } from './types'

export const IconInfo: Icon = ({
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
      data-slot='icon-ui-info'
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
        r='10.18'
        transform='rotate(90 12 12)'
        fill='currentColor'
      />
      <circle cx='12' cy='12' r='10.18' transform='rotate(90 12 12)' stroke='currentColor' />
      <path d='M13.7 18.11c-1.08 0-1.95-.48-1.95-2.11v-4.8' stroke='currentColor' />
      <path
        d='M12.33 6.86a.57.57 0 1 1-1.15 0 .57.57 0 0 1 1.15 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
