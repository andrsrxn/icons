import type { Icon } from './types'

export const IconDialpad: Icon = ({
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
      data-slot='icon-ui-dialpad'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle opacity='.2' cx='12' cy='4.62' r='2.11' fill='currentColor' />
      <circle opacity='.2' cx='12' cy='12' r='2.11' fill='currentColor' />
      <circle opacity='.2' cx='12' cy='19.38' r='2.11' fill='currentColor' />
      <circle cx='4.84' cy='4.62' r='2.11' stroke='currentColor' />
      <circle cx='4.84' cy='12' r='2.11' stroke='currentColor' />
      <circle cx='12' cy='4.62' r='2.11' stroke='currentColor' />
      <circle cx='12' cy='12' r='2.11' stroke='currentColor' />
      <circle cx='12' cy='19.38' r='2.11' stroke='currentColor' />
      <circle cx='19.2' cy='4.62' r='2.11' stroke='currentColor' />
      <circle cx='19.2' cy='12' r='2.11' stroke='currentColor' />
    </svg>
  )
}
