import type { Icon } from './types'

export const IconKeyboardBrightnessDim: Icon = ({
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
      data-slot='icon-ui-keyboard-brightness-dim'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M2.64 17.32H3.8' stroke='currentColor' />
      <path d='M8.12 17.32h7.76' stroke='currentColor' />
      <path d='M20.28 17.34h.92' stroke='currentColor' />
      <path d='M12 8.18V6.95' stroke='currentColor' />
      <path d='m18.5 10.7.62-.62' stroke='currentColor' />
      <path d='m5.5 10.78-.76-.75' stroke='currentColor' />
    </svg>
  )
}
