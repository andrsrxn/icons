import type { Icon } from './types'

export const IconTextLowercase: Icon = ({
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
      data-slot='icon-ui-text-lowercase'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M17.05 17.87c-1.89 0-3.42-1.37-3.42-3.07 0-2.26 1.53-3.08 3.42-3.08h3.4v3.08c0 1.7-1.52 3.07-3.4 3.07'
        stroke='currentColor'
      />
      <path
        d='M6.15 17.87c-1.88 0-3.41-1.37-3.41-3.07 0-2.26 1.53-3.08 3.41-3.08h3.41v3.08c0 1.7-1.52 3.07-3.4 3.07'
        stroke='currentColor'
      />
      <path
        d='M21.26 18.05s-.46-.37-.46-1.5v-6.2c0-2.45-.55-3.91-2.83-4.33-1.47-.28-2.61.37-3.48 1.49'
        stroke='currentColor'
      />
      <path
        d='M10.37 18.05s-.47-.37-.47-1.5v-6.2c0-2.45-.55-3.91-2.83-4.33-1.46-.28-2.6.37-3.47 1.49'
        stroke='currentColor'
      />
    </svg>
  )
}
