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
        d='m19.78 16.95-1.07-2.02-1.09 2.02-2.06 1.14 2.06 1.06 1.09 2.36 1.07-2.36L22.02 18z'
        fill='currentColor'
      />
      <path d='M1.75 15.4V8.6' stroke='currentColor' />
      <path d='M22.25 11V8.27' stroke='currentColor' />
      <path d='M14.05 14.13V8.87' stroke='currentColor' />
      <path d='M9.95 17.32V6.68' stroke='currentColor' />
      <path d='M5.85 19.61V4.4' stroke='currentColor' />
      <path d='M18.15 11V4.39' stroke='currentColor' />
      <path d='M14.98 17.94c1.84 0 3.81-1.98 3.81-3.8' stroke='currentColor' />
      <path d='M22.6 17.94c-1.83 0-3.8-1.98-3.8-3.8' stroke='currentColor' />
      <path d='M14.98 17.94c1.83 0 3.81 2.02 3.81 3.81' stroke='currentColor' />
      <path d='M22.6 17.94c-1.8 0-3.8 2-3.8 3.81' stroke='currentColor' />
    </svg>
  )
}
