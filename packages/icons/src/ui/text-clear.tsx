import type { Icon } from './types'

export const IconTextClear: Icon = ({
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
      data-slot='icon-ui-text-clear'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='m12.44 3.75-4.42 16.5' stroke='currentColor' />
      <path d='M10.95 20.25H5.48' stroke='currentColor' />
      <path
        d='M18.9 5.67c0-1.06-.86-1.92-1.93-1.92h-9.5c-1.06 0-1.92.86-1.92 1.92'
        stroke='currentColor'
      />
      <path d='m13.98 15.33 4.92 4.92' stroke='currentColor' />
      <path d='m13.97 20.25 4.92-4.92' stroke='currentColor' />
    </svg>
  )
}
