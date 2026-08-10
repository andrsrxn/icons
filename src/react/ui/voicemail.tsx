import type { Icon } from './types'

export const IconVoicemail: Icon = ({
  size = 24,
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
      data-slot='voicemail'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle opacity='.2' cx='6.73' cy='12' r='3.16' fill='currentColor' />
      <circle opacity='.2' cx='17.27' cy='12' r='3.16' fill='currentColor' />
      <circle cx='6.73' cy='12' r='3.16' stroke='currentColor' strokeWidth='1.5' />
      <circle cx='17.27' cy='12' r='3.16' stroke='currentColor' strokeWidth='1.5' />
      <path d='M7.13 15.16h10.14' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
    </svg>
  )
}
