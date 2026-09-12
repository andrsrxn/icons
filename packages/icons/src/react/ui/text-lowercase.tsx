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
        d='M17.24 17.86c-2.07 0-3.75-1.46-3.75-3.26 0-2.39 1.68-3.26 3.75-3.26H21v3.26c0 1.8-1.68 3.26-3.75 3.26'
        stroke='currentColor'
      />
      <path
        d='M6.44 17.86c-2.07 0-3.75-1.46-3.75-3.26 0-2.39 1.68-3.26 3.75-3.26h3.75v3.26c0 1.8-1.68 3.26-3.75 3.26'
        stroke='currentColor'
      />
      <path
        d='M10.67 18.05s-.48-.37-.48-1.5v-6.2c0-2.45-.57-3.91-2.93-4.33-1.52-.28-2.71.37-3.6 1.49'
        stroke='currentColor'
      />
      <path
        d='M21.56 18.05s-.49-.37-.49-1.5v-6.2c0-2.45-.57-3.91-2.93-4.33-1.52-.28-2.7.37-3.6 1.49'
        stroke='currentColor'
      />
    </svg>
  )
}
