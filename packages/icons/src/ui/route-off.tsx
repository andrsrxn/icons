import type { Icon } from './types'

export const IconRouteOff: Icon = ({
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
      data-slot='icon-ui-route-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle opacity='.2' cx='18.78' cy='5.65' r='2.71' fill='currentColor' />
      <circle opacity='.2' cx='5.22' cy='18.35' r='2.71' fill='currentColor' />
      <circle cx='18.78' cy='5.65' r='2.71' stroke='currentColor' />
      <circle cx='5.22' cy='18.35' r='2.71' stroke='currentColor' />
      <path d='M8.09 18.64h9.37q.5 0 .95-.17' stroke='currentColor' />
      <path d='M5.67 5.75a2.71 2.71 0 0 0 .21 5.27l6.2 1.19' stroke='currentColor' />
      <path d='M9.03 5.65h6.94' stroke='currentColor' />
      <path d='m16.17 12.98.28.06 1.5.29a2.7 2.7 0 0 1 2.15 3.08' stroke='currentColor' />
      <path d='m2.74 2.74 18.52 18.52' stroke='currentColor' />
    </svg>
  )
}
