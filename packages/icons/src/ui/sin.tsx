import type { Icon } from './types'

export const IconSin: Icon = ({
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
      data-slot='icon-ui-sin'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M7.66 9a4.2 4.2 0 0 0-2.74-1.07c-1.3 0-2.73.68-2.73 2.12 0 3.09 5.47.63 5.47 3.76 0 1.47-1.4 2.26-2.74 2.26-1.33 0-2.23-.4-2.85-1.25'
        stroke='currentColor'
      />
      <path d='M15.72 7.98v8.09' stroke='currentColor' />
      <path d='m15.72 7.98 6.21 8.04' stroke='currentColor' />
      <path d='M21.93 7.93v8.09' stroke='currentColor' />
      <path d='M11.5 16.02V7.98' stroke='currentColor' />
    </svg>
  )
}
