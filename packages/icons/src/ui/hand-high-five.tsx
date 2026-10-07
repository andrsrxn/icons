import type { Icon } from './types'

export const IconHandHighFive: Icon = ({
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
      data-slot='icon-ui-hand-high-five'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M18.77 3.46 17.44 3l-1.02.45-1.61-1.92-1.44.71-.57 2.83h-2.27l.26 5 2.58.71.92 6.21L19 15.6l3.5-6.27-1.62-1.26L19 9.12z'
        fill='currentColor'
      />
      <path d='M10.93 15.28V8.75a1.44 1.44 0 1 0-2.89 0v6.53' stroke='currentColor' />
      <path d='M13.18 8.1v-5a1.44 1.44 0 0 1 2.89 0v5' stroke='currentColor' />
      <path d='M13.82 13.67v-1.9a1.44 1.44 0 0 0-2.89 0v3.5' stroke='currentColor' />
      <path d='M10.29 7.5V6.1a1.44 1.44 0 0 1 2.89 0v2.02' stroke='currentColor' />
      <path d='M8.04 15.22v-5.18a1.44 1.44 0 1 0-2.89 0v5.62' stroke='currentColor' />
      <path d='M16.07 8.04V4.38a1.44 1.44 0 1 1 2.89 0v5.63' stroke='currentColor' />
      <path
        d='m5.15 15.74-.74-1.28a1.48 1.48 0 0 0-2.6 1.41l1.77 3.48a5.6 5.6 0 0 0 5 3.04h1.08c2.1-.02 4-1.44 4.24-3.53.25-2.2-.08-3.12-.08-5.35'
        stroke='currentColor'
      />
      <path
        d='m18.96 10.09.74-1.29a1.48 1.48 0 0 1 2.6 1.42l-1.78 3.48a5.6 5.6 0 0 1-4.98 3.04h-1.12'
        stroke='currentColor'
      />
      <path d='m4 4.66 1.67.96' stroke='currentColor' />
      <path d='m7.8 2 .5 1.86' stroke='currentColor' />
    </svg>
  )
}
