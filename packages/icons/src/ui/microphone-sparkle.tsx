import type { Icon } from './types'

export const IconMicrophoneSparkle: Icon = ({
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
      data-slot='icon-ui-microphone-sparkle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M12 14.52h.19a4 4 0 0 0 3.91-3.92V6.74l-.55-.54a1.5 1.5 0 0 1-.12-2.03 3 3 0 0 0-2.93-2.42h-.73A3.9 3.9 0 0 0 7.9 5.63v4.98a4 4 0 0 0 4.1 3.9'
        fill='currentColor'
      />
      <path d='M12 1.65a4.1 4.1 0 0 0-4.1 4.1v4.97a4.1 4.1 0 1 0 8.2 0' stroke='currentColor' />
      <path d='M19.02 9.44v1.4a7.02 7.02 0 0 1-14.04 0v-2.1' stroke='currentColor' />
      <path d='M12 18v4.29' stroke='currentColor' />
      <path d='M15 22.29H9' stroke='currentColor' />
      <path d='M13.12 4.64c1.44 0 2.99-1.56 2.99-2.99' stroke='currentColor' />
      <path d='M19.09 4.64c-1.43 0-2.98-1.55-2.98-2.99' stroke='currentColor' />
      <path d='M13.12 4.64c1.43 0 2.99 1.58 2.99 2.98' stroke='currentColor' />
      <path d='M19.09 4.64c-1.41 0-2.98 1.56-2.98 2.98' stroke='currentColor' />
    </svg>
  )
}
