import type { Icon } from './types'

export const IconSoundWaveOff: Icon = ({
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
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-sound-wave-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M1.75 15.4V8.6' stroke='currentColor' />
      <path d='M22.25 15.4V8.6' stroke='currentColor' />
      <path d='M14.05 14V8.87' stroke='currentColor' />
      <path d='M9.95 17.32V6.68' stroke='currentColor' />
      <path d='M5.85 19.61V5.9' stroke='currentColor' />
      <path d='M18.15 18V4.39' stroke='currentColor' />
      <path d='m2.63 2.63 18.74 18.74' stroke='currentColor' />
    </svg>
  )
}
