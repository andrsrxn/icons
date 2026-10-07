import type { Icon } from './types'

export const IconFishingHook: Icon = ({
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
      data-slot='icon-ui-fishing-hook'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle opacity='.2' cx='7.89' cy='7.77' r='2.28' fill='currentColor' />
      <path d='M7.89 2.1v3.4' stroke='currentColor' />
      <path
        d='M7.89 10.05v6.6a5.25 5.25 0 0 0 10.5 0v-2a.8.8 0 0 0-1.22-.7l-1.61.99'
        stroke='currentColor'
      />
      <circle cx='7.89' cy='7.77' r='2.28' stroke='currentColor' />
    </svg>
  )
}
