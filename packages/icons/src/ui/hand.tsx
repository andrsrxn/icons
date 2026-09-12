import type { Icon } from './types'

export const IconHand: Icon = ({
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
      data-slot='icon-ui-hand'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m8.14 4.2 1.82-.61 1.39.6 2.19-2.6 1.95.97.78 3.84h3.08l.22 12.95-5.5 3.02-6.25-1.66-4.76-8.52 2.2-1.72 2.56 1.44z'
        fill='currentColor'
      />
      <path d='M15.75 12.58V3.7a1.96 1.96 0 1 0-3.92 0v8.88' stroke='currentColor' />
      <path d='M19.68 10.4V7.8a1.96 1.96 0 1 0-3.93 0v4.78' stroke='currentColor' />
      <path d='M11.83 12.51V5.46a1.96 1.96 0 0 0-3.93 0v7.65' stroke='currentColor' />
      <path
        d='m7.89 13.21-1-1.74a2.01 2.01 0 0 0-3.54 1.92l2.42 4.73a7.6 7.6 0 0 0 6.78 4.13h1.48c2.86-.02 5.44-1.95 5.76-4.8.35-2.98-.1-4.24-.1-7.27'
        stroke='currentColor'
      />
    </svg>
  )
}
