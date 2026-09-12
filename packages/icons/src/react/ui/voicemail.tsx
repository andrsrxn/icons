import type { Icon } from './types'

export const IconVoicemail: Icon = ({
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
      data-slot='icon-ui-voicemail'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle opacity='.2' cx='5.53' cy='12' r='3.88' fill='currentColor' />
      <circle opacity='.2' cx='18.47' cy='12' r='3.88' fill='currentColor' />
      <circle cx='5.53' cy='12' r='3.88' stroke='currentColor' />
      <circle cx='18.47' cy='12' r='3.88' stroke='currentColor' />
      <path d='M6.03 15.88h12.44' stroke='currentColor' />
    </svg>
  )
}
