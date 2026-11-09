import type { Icon } from './types'

export const IconSoundWaveOff: Icon = ({
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
      data-slot='icon-ui-sound-wave-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='m2.63 2.63 18.74 18.74' stroke='currentColor' />
      <path d='M1.75 15.4V8.6' stroke='currentColor' />
      <path d='M22.25 15.4V8.6' stroke='currentColor' />
      <path d='M14.05 15.13v-1' stroke='currentColor' />
      <path d='M14.05 10.52V8.87' stroke='currentColor' />
      <path d='M9.95 17.32V10' stroke='currentColor' />
      <path d='M5.85 19.61V6.05' stroke='currentColor' />
      <path d='M18.15 14.63V4.39' stroke='currentColor' />
      <path d='M18.15 19.61V18.4' stroke='currentColor' />
    </svg>
  )
}
