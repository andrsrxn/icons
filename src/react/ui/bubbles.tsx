import type { Icon } from './types'

export const IconBubbles: Icon = ({
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
      data-slot='bubbles'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle opacity='.2' cx='8.69' cy='8.65' r='5.03' fill='currentColor' />
      <circle opacity='.2' cx='14.85' cy='17.5' r='2.88' fill='currentColor' />
      <circle opacity='.2' cx='18.67' cy='11.05' r='1.68' fill='currentColor' />
      <circle cx='8.69' cy='8.65' r='5.03' stroke='currentColor' strokeWidth='1.5' />
      <circle cx='14.85' cy='17.5' r='2.88' stroke='currentColor' strokeWidth='1.5' />
      <circle cx='18.67' cy='11.05' r='1.68' stroke='currentColor' strokeWidth='1.5' />
      <path
        d='M8.45 6.35c-.54.03-.88.19-1.27.58s-.54.73-.58 1.27'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
