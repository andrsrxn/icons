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
        d='M14.24 2.76c3.3 0 4.95 0 5.98 1.03 1.02 1.02 1.02 2.67 1.02 5.97v4.48c0 3.3 0 4.95-1.02 5.97-1.03 1.03-2.68 1.03-5.98 1.03H9.76c-3.3 0-4.95 0-5.98-1.03-1.02-1.02-1.02-2.67-1.02-5.97V9.76c0-3.3 0-4.95 1.02-5.97 1.03-1.03 2.68-1.03 5.98-1.03z'
        fill='currentColor'
      />
      <path
        d='M15.91 21.27c1.76 0 2.64 0 3.33-.3a3.5 3.5 0 0 0 1.75-1.76c.31-.68.31-1.56.31-3.33'
        stroke='currentColor'
      />
      <path
        d='M15.95 2.76c1.72 0 2.59 0 3.26.3.8.35 1.44.99 1.8 1.79.3.67.3 1.54.3 3.27'
        stroke='currentColor'
      />
      <path
        d='M8.1 21.27c-1.77 0-2.65 0-3.34-.3a3.5 3.5 0 0 1-1.75-1.76c-.31-.68-.31-1.57-.31-3.33h0'
        stroke='currentColor'
      />
      <path
        d='M8.1 2.76c-1.77 0-2.65 0-3.34.3a3.5 3.5 0 0 0-1.75 1.76c-.31.69-.31 1.57-.31 3.34h0'
        stroke='currentColor'
      />
      <path d='M5.67 13.85v-3.7' stroke='currentColor' />
      <path d='M18.33 13.85v-3.7' stroke='currentColor' />
      <path d='M12 14.48V9.52' stroke='currentColor' />
      <path d='M8.92 16.14V7.86' stroke='currentColor' />
      <path d='M15.08 16.14V7.86' stroke='currentColor' />
    </svg>
  )
}
