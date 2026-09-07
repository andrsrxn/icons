import type { Icon } from './types'

export const IconVoicemail: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

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
      aria-labelledby={isLabelled && title && !ariaLabel ? 'voicemail-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? <title id={'voicemail-title'}>{title}</title> : null}
      <circle opacity='.2' cx='6.04' cy='12' r='3.57' fill='currentColor' />
      <circle opacity='.2' cx='17.96' cy='12' r='3.57' fill='currentColor' />
      <circle cx='6.04' cy='12' r='3.57' stroke='currentColor' />
      <circle cx='17.96' cy='12' r='3.57' stroke='currentColor' />
      <path d='M6.5 15.57h11.46' stroke='currentColor' />
    </svg>
  )
}
