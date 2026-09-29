import type { Icon } from './types'

export const IconStrokeStyleDashed: Icon = ({
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
      data-slot='icon-ui-stroke-style-dashed'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M18.77 12h2.49' stroke='currentColor' />
      <path d='M13.5 12H16' stroke='currentColor' />
      <path d='M7.91 12h2.5' stroke='currentColor' />
      <path d='M2.62 12h2.49' stroke='currentColor' />
    </svg>
  )
}
