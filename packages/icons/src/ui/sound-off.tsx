import type { Icon } from './types'

export const IconSoundOff: Icon = ({
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
      data-slot='icon-ui-sound-off'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M1.75 15.4V8.6' stroke='currentColor' />
      <path d='M22.25 12V8.6' stroke='currentColor' />
      <path d='M14.05 14.19V8.87' stroke='currentColor' />
      <path d='M9.95 17.32V6.68' stroke='currentColor' />
      <path d='M5.85 19.61V4.4' stroke='currentColor' />
      <path d='M18.15 12V4.39' stroke='currentColor' />
      <path d='m17.24 15.8 4.9 4.9' stroke='currentColor' />
      <path d='m17.24 20.7 4.89-4.9' stroke='currentColor' />
    </svg>
  )
}
