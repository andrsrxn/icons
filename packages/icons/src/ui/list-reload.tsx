import type { Icon } from './types'

export const IconListReload: Icon = ({
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
      data-slot='icon-ui-list-reload'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M21.42 6H2.67' stroke='currentColor' />
      <path d='M10.81 12H2.67' stroke='currentColor' />
      <path d='M10.81 18H2.67' stroke='currentColor' />
      <path
        d='M21.87 13.19c-1.36-1.8-2.7-2.13-3.78-2.13a3.96 3.96 0 1 0 2.78 6.78'
        stroke='currentColor'
      />
      <path
        d='M22.4 10.67v.03c0 1.42 0 2.13-.44 2.57s-1.15.44-2.57.44h-.04'
        stroke='currentColor'
      />
    </svg>
  )
}
