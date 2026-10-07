import type { Icon } from './types'

export const IconFishingRod: Icon = ({
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
      data-slot='icon-ui-fishing-rod'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle opacity='.2' cx='5.06' cy='9.87' r='1.83' fill='currentColor' />
      <path
        d='M5.06 7.91v-2.6c0-1.62 0-2.44.7-3.03.7-.6 1.37-.5 2.68-.28 2.59.42 6.13 1.8 8.7 5.91 3.93 6.25 3.45 14.33 3.45 14.33'
        stroke='currentColor'
      />
      <path
        d='M5.06 11.71v3.63a3.03 3.03 0 0 0 6.05 0v-1.15c0-.37-.4-.59-.7-.4l-.93.56'
        stroke='currentColor'
      />
      <circle cx='5.06' cy='9.87' r='1.83' stroke='currentColor' />
      <path d='M20.3 19.5a2.72 2.72 0 0 1-1-5.34' stroke='currentColor' />
    </svg>
  )
}
