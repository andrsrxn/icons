import type { Icon } from './types'

export const IconTransmissionAutomatic: Icon = ({
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
      data-slot='icon-ui-transmission-automatic'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M8.16 6.48v9.73c0 1.68 0 2.52.47 3.08l.24.24c.56.47 1.4.47 3.07.47'
        stroke='currentColor'
      />
      <circle opacity='.2' cx='8.16' cy='4.08' r='2.39' fill='currentColor' />
      <circle cx='8.16' cy='4.08' r='2.39' stroke='currentColor' />
      <path d='M15.01 9.28v4.62' stroke='currentColor' />
      <path
        d='M15.03 9.28h1.65c.69 0 1.25.6 1.25 1.32s-.56 1.33-1.25 1.33h-1.65'
        stroke='currentColor'
      />
      <path d='M8.16 11.59h3.78' stroke='currentColor' />
      <path
        d='M15.03 21.42v-2.84c0-.41 0-.62.16-.77.15-.15.33-.13.69-.11.95.06 2.36.46 2.36 2.3s-1.41 2.24-2.36 2.3c-.36.02-.54.03-.7-.11s-.15-.36-.15-.77'
        stroke='currentColor'
      />
    </svg>
  )
}
