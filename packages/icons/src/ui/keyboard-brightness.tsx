import type { Icon } from './types'

export const IconKeyboardBrightness: Icon = ({
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
      data-slot='icon-ui-keyboard-brightness'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M1.56 17.32h3.33' stroke='currentColor' />
      <path d='M8.3 17.32h7.4' stroke='currentColor' />
      <path d='M19.03 17.34h3.41' stroke='currentColor' />
      <path d='M12 9.52V5.61' stroke='currentColor' />
      <path d='m17.61 11.6 2.4-2.41' stroke='currentColor' />
      <path d='M6.33 11.62 3.9 9.2' stroke='currentColor' />
    </svg>
  )
}
