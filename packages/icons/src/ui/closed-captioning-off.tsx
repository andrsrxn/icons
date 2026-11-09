import type { Icon } from './types'

export const IconClosedCaptioningOff: Icon = ({
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
      data-slot='icon-ui-closed-captioning-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.75 12c0-3.23 0-4.85.88-5.95a4 4 0 0 1 .62-.61c1.1-.88 2.7-.88 5.94-.88h5.62c3.23 0 4.85 0 5.94.88a4 4 0 0 1 .62.61c.88 1.1.88 2.72.88 5.95s0 4.85-.88 5.95a4 4 0 0 1-.62.61c-1.1.88-2.7.88-5.94.88H9.19c-3.23 0-4.85 0-5.94-.88a4 4 0 0 1-.62-.61c-.88-1.1-.88-2.72-.88-5.95'
        fill='currentColor'
      />
      <path d='m18.19 14.95-.25.1' stroke='currentColor' />
      <path d='m2.74 2.74 18.52 18.52' stroke='currentColor' />
      <path d='M10.86 14.95a3.3 3.3 0 1 1-2.14-6.2' stroke='currentColor' />
      <path
        d='M19.1 19.36c-1.04.19-2.42.19-4.36.19H9.26c-3.33 0-5 0-6.11-.94a4 4 0 0 1-.5-.5C1.7 17 1.7 15.33 1.7 12s0-5 .93-6.11a3.4 3.4 0 0 1 1.92-1.18'
        stroke='currentColor'
      />
      <path
        d='M8.38 4.45h6.36c3.33 0 5 0 6.11.94a4 4 0 0 1 .5.5c.94 1.11.94 2.78.94 6.11v0c0 2.64 0 4.46-.6 5.62'
        stroke='currentColor'
      />
      <path d='M18.19 9.05a3.3 3.3 0 0 0-4.45 1.44' stroke='currentColor' />
    </svg>
  )
}
