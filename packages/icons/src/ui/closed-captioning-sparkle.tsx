import type { Icon } from './types'

export const IconClosedCaptioningSparkle: Icon = ({
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
      data-slot='icon-ui-closed-captioning-sparkle'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M20.34 6q.15-.19.4-.17c.88.1 1.55.85 1.55 1.74v4.83c0 2.95 0 4.42-.74 5.46a4 4 0 0 1-.95.95c-1.04.74-2.5.74-5.45.74h-5.9c-3.32 0-5 0-6.1-.94a4 4 0 0 1-.5-.5C1.7 17 1.7 15.33 1.7 12s0-5 .93-6.11a4 4 0 0 1 .5-.5c1.12-.94 2.79-.94 6.12-.94h6.3c.4 0 .6.51.3.8-.2.17-.2.48 0 .66l1.1 1.05c.67.64 1 .95 1.4.96l.18-.01c.39-.07.67-.44 1.23-1.17z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M22.29 11.08v.47c0 3.77 0 5.65-1.17 6.82-1.17 1.18-3.06 1.18-6.83 1.18H9.26c-3.33 0-5 0-6.11-.94a4 4 0 0 1-.5-.5C1.7 17 1.7 15.33 1.7 12s0-5 .93-6.11a4 4 0 0 1 .5-.5c1.12-.94 2.79-.94 6.12-.94h1.85'
        stroke='currentColor'
      />
      <path d='M10.62 9.05a3.3 3.3 0 1 0 0 5.9' stroke='currentColor' />
      <path
        d='M18.19 14.95A3.3 3.3 0 0 1 13.38 12c0-1.39.88-2.66 2.16-2.92'
        stroke='currentColor'
      />
      <path d='M18.48 1.54c0 1.9-2.06 3.98-3.98 3.98' stroke='currentColor' />
      <path d='M18.48 1.54c0 1.9 2.07 3.98 3.98 3.98' stroke='currentColor' />
      <path d='M18.48 9.5c0-1.88-2.07-3.98-3.98-3.98' stroke='currentColor' />
      <path d='M18.48 9.5c0-1.9 2.1-3.98 3.98-3.98' stroke='currentColor' />
    </svg>
  )
}
