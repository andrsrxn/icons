import type { Icon } from './types'

export const IconTelescope: Icon = ({
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
      data-slot='icon-ui-telescope'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        x='16.07'
        y='4.07'
        width='4.66'
        height='8.1'
        rx='1.5'
        transform='rotate(-15 16.07 4.07)'
        stroke='currentColor'
      />
      <path
        d='m15.96 5.5-9.5 2.55c-.61.17-.92.25-1.16.39a2 2 0 0 0-.98 1.7c0 .27.08.58.24 1.2.17.62.25.93.4 1.17a2 2 0 0 0 1.7.98c.27 0 .58-.08 1.2-.24l9.5-2.55'
        stroke='currentColor'
      />
      <path d='M4.12 9.67 3 9.97a1.73 1.73 0 0 0 .9 3.34l1.1-.3' stroke='currentColor' />
      <path d='M10.37 14.13a2 2 0 0 0 2.02 2.02 2.01 2.01 0 1 0-2.02-2.02' stroke='currentColor' />
      <path d='m11.36 16.15-2.97 5.54' stroke='currentColor' />
      <path d='m13.45 16.15 3.2 5.54' stroke='currentColor' />
      <rect
        opacity='.2'
        x='3.87'
        y='8.75'
        width='13.33'
        height='5.25'
        rx='2.63'
        transform='rotate(-15 3.87 8.75)'
        fill='currentColor'
      />
    </svg>
  )
}
