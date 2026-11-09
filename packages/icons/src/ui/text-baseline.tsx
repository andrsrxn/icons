import type { Icon } from './types'

export const IconTextBaseline: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

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
      data-slot='icon-ui-text-baseline'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M19.46 21.28H4.7' stroke='currentColor' />
      <path
        d='m6.71 17.53 2.5-8.5h0c1.24-4.2 1.85-6.3 3-6.28s1.7 2.13 2.83 6.35l2.25 8.43'
        stroke='currentColor'
      />
      <path d='M8.7 11.85h6.81' stroke='currentColor' />
    </svg>
  )
}
