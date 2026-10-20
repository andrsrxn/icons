import type { Icon } from './types'

export const IconSoundWaveScan: Icon = ({
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
      data-slot='icon-ui-sound-wave-scan'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M15.24 2.76c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12v8.48c0 1.88 0 2.83-.59 3.41-.58.59-1.52.59-3.4.59H6.74c-1.88 0-2.82 0-3.4-.59-.6-.58-.6-1.53-.6-3.41V8.76c0-2.83 0-4.24.89-5.12.88-.88 2.3-.88 5.12-.88z'
        fill='currentColor'
      />
      <path
        d='M15.91 21.27c2.24 0 3.36 0 4.14-.56a3 3 0 0 0 .69-.68c.56-.79.56-1.9.56-4.15'
        stroke='currentColor'
      />
      <path
        d='M15.95 2.76c2.2 0 3.3 0 4.08.55a3 3 0 0 1 .72.72c.55.78.55 1.88.55 4.09h0'
        stroke='currentColor'
      />
      <path
        d='M8.1 21.27c-2.25 0-3.37 0-4.16-.56a3 3 0 0 1-.67-.68c-.57-.78-.57-1.9-.57-4.15'
        stroke='currentColor'
      />
      <path
        d='M8.1 2.76c-2.25 0-3.37 0-4.16.57a3 3 0 0 0-.67.67c-.57.79-.57 1.91-.57 4.16'
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
