import type { Icon } from './types'

export const IconDock: Icon = ({
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
      data-slot='icon-ui-dock'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M15.07 19.25c3.05 0 4.58 0 5.64-.79a4 4 0 0 0 .83-.83c.78-1.06.78-2.58.78-5.63s0-4.57-.78-5.63a4 4 0 0 0-.83-.83c-1.06-.79-2.59-.79-5.64-.79H8.93c-3.05 0-4.58 0-5.64.79a4 4 0 0 0-.83.83c-.78 1.06-.78 2.58-.78 5.63s0 4.57.78 5.63a4 4 0 0 0 .83.83c1.06.79 2.59.79 5.64.79z'
        fill='currentColor'
      />
      <path
        d='M1.68 12c0-3.05 0-4.57.78-5.63a4 4 0 0 1 .83-.83c1.06-.79 2.59-.79 5.64-.79h6.14c3.05 0 4.58 0 5.64.79a4 4 0 0 1 .83.83c.78 1.06.78 2.58.78 5.63v0c0 3.05 0 4.57-.78 5.63a4 4 0 0 1-.83.83c-1.06.79-2.59.79-5.64.79H8.93c-3.05 0-4.58 0-5.64-.79a4 4 0 0 1-.83-.83c-.78-1.06-.78-2.58-.78-5.63'
        stroke='currentColor'
      />
      <path d='M5.96 15.51h12.08' stroke='currentColor' />
    </svg>
  )
}
