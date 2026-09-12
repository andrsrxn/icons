import type { Icon } from './types'

export const IconTextOff: Icon = ({
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
      data-slot='icon-ui-text-off'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M12 3.75v16.5' stroke='currentColor' />
      <path d='M14.74 20.25H9.26' stroke='currentColor' />
      <path
        d='M18.67 5.67c0-1.06-.86-1.92-1.92-1.92H6.83c-.83 0-1.5.68-1.5 1.5'
        stroke='currentColor'
      />
      <path d='m2.75 2.75 18.5 18.5' stroke='currentColor' />
    </svg>
  )
}
