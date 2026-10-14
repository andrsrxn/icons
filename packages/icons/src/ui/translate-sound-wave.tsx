import type { Icon } from './types'

export const IconTranslateSoundWave: Icon = ({
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
      data-slot='icon-ui-translate-sound-wave'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M1.6 7.56h10.77' stroke='currentColor' />
      <path d='M6.3 7.56V4.75' stroke='currentColor' />
      <path d='m3.36 11.15 7.7 8.1' stroke='currentColor' />
      <path
        d='M2.35 18.05c2.08-1.2 3.49-2.13 4.97-4.08 1.63-2.15 2-3.7 2.62-6.37'
        stroke='currentColor'
      />
      <path d='M15.6 9.15v6.76' stroke='currentColor' />
      <path d='M22.4 9.15v6.76' stroke='currentColor' />
      <path d='M19 6.63v11.8' stroke='currentColor' />
    </svg>
  )
}
