import type { Icon } from './types'

export const IconSoundWaveCircle: Icon = ({
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
      data-slot='icon-ui-sound-wave-circle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M1.69 12a10.31 10.31 0 1 0 20.62 0 10.31 10.31 0 0 0-20.62 0'
        fill='currentColor'
      />
      <path d='M5.75 13.95v-3.9' stroke='currentColor' />
      <path d='M18.25 13.95v-3.9' stroke='currentColor' />
      <path d='M12 14.61V9.39' stroke='currentColor' />
      <path d='M8.95 16.35v-8.7' stroke='currentColor' />
      <path d='M15.05 16.35v-8.7' stroke='currentColor' />
      <path d='M1.7 12a10.31 10.31 0 1 1 20.61 0A10.31 10.31 0 0 1 1.7 12' stroke='currentColor' />
    </svg>
  )
}
