import type { Icon } from './types'

export const IconSoundWaveScan: Icon = ({
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
      data-slot='icon-ui-sound-wave-scan'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M14.46 2.55c3.3 0 4.95 0 5.97 1.02 1.03 1.03 1.03 2.68 1.03 5.98v4.9c0 3.3 0 4.95-1.03 5.98-1.02 1.02-2.67 1.02-5.97 1.02H9.54c-3.3 0-4.94 0-5.97-1.02-1.03-1.03-1.03-2.68-1.03-5.98v-4.9c0-3.3 0-4.95 1.03-5.98C4.6 2.55 6.24 2.55 9.54 2.55z'
        fill='currentColor'
      />
      <path
        d='M16 21.49c1.88 0 2.82 0 3.54-.35a3.5 3.5 0 0 0 1.63-1.62c.35-.73.35-1.67.35-3.55'
        stroke='currentColor'
      />
      <path
        d='M16.04 2.55c1.84 0 2.76 0 3.48.33a3.5 3.5 0 0 1 1.66 1.66c.34.72.34 1.64.34 3.49h0'
        stroke='currentColor'
      />
      <path
        d='M8 21.49c-1.88 0-2.82 0-3.54-.35a3.5 3.5 0 0 1-1.63-1.62c-.35-.73-.35-1.67-.35-3.55'
        stroke='currentColor'
      />
      <path
        d='M8 2.55c-1.88 0-2.82 0-3.54.34a3.5 3.5 0 0 0-1.63 1.63c-.35.72-.35 1.66-.35 3.55'
        stroke='currentColor'
      />
      <path d='M5.53 13.9v-3.8' stroke='currentColor' />
      <path d='M18.47 13.9v-3.8' stroke='currentColor' />
      <path d='M12 14.54V9.46' stroke='currentColor' />
      <path d='M8.85 16.23V7.77' stroke='currentColor' />
      <path d='M15.15 16.23V7.77' stroke='currentColor' />
    </svg>
  )
}
