import type { Icon } from './types'

export const IconArrowsRightFromLine: Icon = ({
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
      data-slot='icon-ui-arrows-right-from-line'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='m19.25 4.57.2.2c1.34 1.34 2 2 2 2.84s-.66 1.5-2 2.83l-.2.2' stroke='currentColor' />
      <path d='m19.25 13.35.2.2c1.34 1.34 2 2 2 2.84s-.66 1.5-2 2.83l-.2.2' stroke='currentColor' />
      <path d='M6.13 7.61h14.85' stroke='currentColor' />
      <path d='M6.13 16.39h14.85' stroke='currentColor' />
      <path d='M2.73 19.35V4.65' stroke='currentColor' />
    </svg>
  )
}
