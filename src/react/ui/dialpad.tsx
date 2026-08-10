import type { Icon } from './types'

export const IconDialpad: Icon = ({
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
      data-slot='dialpad'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle opacity='.2' cx='12' cy='5.4' r='1.88' fill='currentColor' />
      <circle opacity='.2' cx='12' cy='12' r='1.88' fill='currentColor' />
      <circle opacity='.2' cx='12' cy='18.6' r='1.88' fill='currentColor' />
      <circle cx='5.6' cy='5.4' r='1.88' stroke='currentColor' strokeWidth='1.5' />
      <circle cx='5.6' cy='12' r='1.88' stroke='currentColor' strokeWidth='1.5' />
      <circle cx='12' cy='5.4' r='1.88' stroke='currentColor' strokeWidth='1.5' />
      <circle cx='12' cy='12' r='1.88' stroke='currentColor' strokeWidth='1.5' />
      <circle cx='12' cy='18.6' r='1.88' stroke='currentColor' strokeWidth='1.5' />
      <circle cx='18.43' cy='5.4' r='1.88' stroke='currentColor' strokeWidth='1.5' />
      <circle cx='18.43' cy='12' r='1.88' stroke='currentColor' strokeWidth='1.5' />
    </svg>
  )
}
