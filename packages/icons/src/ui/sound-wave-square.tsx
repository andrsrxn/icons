import type { Icon } from './types'

export const IconSoundWaveSquare: Icon = ({
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
      data-slot='icon-ui-sound-wave-square'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M13.24 2.76c3.77 0 5.66 0 6.83 1.17 1.17 1.18 1.17 3.06 1.17 6.83v2.48c0 3.77 0 5.65-1.17 6.83s-3.06 1.17-6.83 1.17h-2.48c-3.77 0-5.66 0-6.83-1.17-1.17-1.18-1.17-3.06-1.17-6.83v-2.48c0-3.77 0-5.65 1.17-6.83S7 2.76 10.76 2.76z'
        fill='currentColor'
      />
      <path d='M18.12 13.9v-3.8' stroke='currentColor' />
      <path d='M12 14.55v-5.1' stroke='currentColor' />
      <path d='M9.02 16.26V7.74' stroke='currentColor' />
      <path d='M14.98 16.26V7.74' stroke='currentColor' />
      <path
        d='M21.38 13.38v-2.76c0-3.78 0-5.66-1.17-6.83s-3.06-1.17-6.83-1.17h-2.77c-3.77 0-5.66 0-6.83 1.17s-1.17 3.05-1.17 6.83v2.76c0 3.78 0 5.66 1.17 6.83s3.06 1.17 6.83 1.17h2.77c3.77 0 5.66 0 6.83-1.17s1.17-3.05 1.17-6.83'
        stroke='currentColor'
      />
      <path d='M5.85 13.95v-3.9' stroke='currentColor' />
    </svg>
  )
}
