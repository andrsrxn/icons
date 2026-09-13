import type { Icon } from './types'

export const IconFlatten: Icon = ({
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
      data-slot='icon-ui-flatten'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='m8.4 8.92.77.78c1.33 1.33 2 2 2.83 2s1.5-.67 2.83-2l.77-.78' stroke='currentColor' />
      <path d='M12 11.4V3.35' stroke='currentColor' />
      <path d='M2.57 15.87h18.86' stroke='currentColor' />
      <path d='M4.64 20h14.72' stroke='currentColor' />
    </svg>
  )
}
