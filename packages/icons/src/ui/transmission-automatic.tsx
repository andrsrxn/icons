import type { Icon } from './types'

export const IconTransmissionAutomatic: Icon = ({
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
      data-slot='icon-ui-transmission-automatic'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M8.16 6.48v9.73c0 1.68 0 2.52.47 3.08l.24.24c.56.47 1.4.47 3.07.47'
        stroke='currentColor'
      />
      <circle opacity='.2' cx='8.16' cy='4.08' r='2.39' fill='currentColor' />
      <circle cx='8.16' cy='4.08' r='2.39' stroke='currentColor' />
      <path d='M8.16 11.59h3.78' stroke='currentColor' />
      <path
        d='M15.01 14.08V10.1c0-.48 0-.71.15-.86.14-.14.38-.14.85-.14h.8c.75 0 1.35.64 1.35 1.42 0 .8-.6 1.43-1.35 1.43h-1.78'
        stroke='currentColor'
      />
      <path
        d='M14.66 21.36v-3.3c0-.41 0-.62.16-.76.15-.15.33-.14.69-.13 1.04.05 2.65.46 2.65 2.54s-1.61 2.49-2.65 2.53c-.36.02-.54.03-.7-.12s-.15-.35-.15-.76'
        stroke='currentColor'
      />
    </svg>
  )
}
