import type { Icon } from './types'

export const IconBalls: Icon = ({
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
      data-slot='icon-ui-balls'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M21.8 10.93c-.9 2.38-2.74 4.18-3.68 3.82s-.64-2.74.27-5.13c.92-2.38 2.28-4.33 3.22-3.97s1.1 2.9.2 5.28'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M9.47 6.19c-.92 2.38-.35 2.8.6 3.16 1.45.12 1.9.53 2.8-1.85.92-2.39 1.22-4.75.27-5.11-.94-.36-2.76 1.42-3.67 3.8'
        fill='currentColor'
      />
      <path
        d='M8.78 8.84c-.1-1.3.18-2.49.89-3.7a6.81 6.81 0 0 1 11.8 6.8 6.7 6.7 0 0 1-6.34 3.42'
        stroke='currentColor'
      />
      <path d='M13.2 2.23s.91 2.24-.16 5.05a8 8 0 0 1-1.45 2.4' stroke='currentColor' />
      <path d='M18.04 14.89s-1-2.38.14-5.35a7.7 7.7 0 0 1 3.47-4.07' stroke='currentColor' />
      <path
        opacity='.2'
        d='M14.53 12.91c1.11 2.56.93 5.34-.22 5.84-1.14.5-2.81-1.48-3.92-4.04s-1.36-5.04-.22-5.54 3.25 1.18 4.36 3.74'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M2.5 18.18c1.11 2.56 3.17 4.37 4.23 3.9 1.05-.45.7-3-.41-5.55-1.12-2.56-2.7-4.46-3.75-4s-1.18 3.1-.07 5.65'
        fill='currentColor'
      />
      <path
        d='M14.53 12.92a6.7 6.7 0 0 1-3.49 8.82 6.71 6.71 0 1 1 3.49-8.82'
        stroke='currentColor'
      />
      <path d='M7 22.13s.37-2.94-.78-5.61a12 12 0 0 0-3.57-4.4' stroke='currentColor' />
      <path d='M14.72 13.82s-3.52-.45-6.7.93-5.27 4.26-5.27 4.26' stroke='currentColor' />
      <path d='M14.1 19.05s-2.4-1.74-3.57-4.4c-1.15-2.67-.78-5.62-.78-5.62' stroke='currentColor' />
    </svg>
  )
}
