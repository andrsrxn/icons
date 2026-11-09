import type { Icon } from './types'

export const IconMicrophoneOff: Icon = ({
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
      data-slot='icon-ui-microphone-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M12 14.52a4.1 4.1 0 0 0 4.1-4.1V6.05a4.1 4.1 0 0 0-8.21 0v4.35A4.1 4.1 0 0 0 12 14.5'
        fill='currentColor'
      />
      <path d='M2.69 2.69 21.3 21.3' stroke='currentColor' />
      <path d='M8.11 4.44a4.1 4.1 0 0 1 8 1.32v4.96c0 .9-.2 1.33-.2 1.33' stroke='currentColor' />
      <path d='M7.9 8.24v2.48a4.1 4.1 0 0 0 6.28 3.48' stroke='currentColor' />
      <path d='M4.98 8.74v2.1a7.02 7.02 0 0 0 11.26 5.6' stroke='currentColor' />
      <path d='M19.02 8.74v2.1q-.02 1.8-.82 3.3' stroke='currentColor' />
      <path d='M12 18v4.29' stroke='currentColor' />
      <path d='M15 22.29H9' stroke='currentColor' />
    </svg>
  )
}
