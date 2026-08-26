import type { Icon } from './types'

export const IconDialpad: Icon = ({
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
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-dialpad'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle opacity='.2' cx='12' cy='4.95' r='2.01' fill='currentColor' />
      <circle opacity='.2' cx='12' cy='12' r='2.01' fill='currentColor' />
      <circle opacity='.2' cx='12' cy='19.05' r='2.01' fill='currentColor' />
      <circle cx='5.16' cy='4.95' r='2.01' stroke='currentColor' strokeWidth={strokeWidth} />
      <circle cx='5.16' cy='12' r='2.01' stroke='currentColor' strokeWidth={strokeWidth} />
      <circle cx='12' cy='4.95' r='2.01' stroke='currentColor' strokeWidth={strokeWidth} />
      <circle cx='12' cy='12' r='2.01' stroke='currentColor' strokeWidth={strokeWidth} />
      <circle cx='12' cy='19.05' r='2.01' stroke='currentColor' strokeWidth={strokeWidth} />
      <circle cx='18.87' cy='4.95' r='2.01' stroke='currentColor' strokeWidth={strokeWidth} />
      <circle cx='18.87' cy='12' r='2.01' stroke='currentColor' strokeWidth={strokeWidth} />
    </svg>
  )
}
