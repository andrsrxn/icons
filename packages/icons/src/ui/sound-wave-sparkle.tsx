import type { Icon } from './types'

export const IconSoundWaveSparkle: Icon = ({
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
      data-slot='icon-ui-sound-wave-sparkle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m20.03 16.25-.93-1.74-.93 1.74-1.8 1 1.8.91.93 2.05.93-2.05 1.94-1z'
        fill='currentColor'
      />
      <path d='M1.75 15.4V8.6' stroke='currentColor' />
      <path d='M22.25 11V8.27' stroke='currentColor' />
      <path d='M14.05 14.13V8.87' stroke='currentColor' />
      <path d='M9.95 17.32V6.68' stroke='currentColor' />
      <path d='M5.85 19.61V4.4' stroke='currentColor' />
      <path d='M18.15 11V4.39' stroke='currentColor' />
      <path d='M15.95 17.41c1.58 0 3.28-1.7 3.28-3.28' stroke='currentColor' />
      <path d='M22.5 17.41c-1.57 0-3.27-1.7-3.27-3.28' stroke='currentColor' />
      <path d='M15.95 17.41c1.57 0 3.28 1.73 3.28 3.28' stroke='currentColor' />
      <path d='M22.5 17.41c-1.55 0-3.27 1.71-3.27 3.28' stroke='currentColor' />
    </svg>
  )
}
