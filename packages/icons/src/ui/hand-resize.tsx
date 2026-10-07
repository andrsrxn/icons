import type { Icon } from './types'

export const IconHandResize: Icon = ({
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
      data-slot='icon-ui-hand-resize'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M17.4 4.3h3.94' stroke='currentColor' />
      <path d='M5.93 4.3H2' stroke='currentColor' />
      <path
        d='m18.33 6.54-.13-.13c-1-1-1.5-1.5-1.5-2.12s.5-1.12 1.5-2.12l.13-.13'
        stroke='currentColor'
      />
      <path
        d='m5 6.54.13-.13c1-1 1.5-1.5 1.5-2.12s-.5-1.12-1.5-2.12l-.12-.13'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='m9.9 4.92 1.86-.63 1.43.63.76 5.51 2.87-.59 1.41 1.96h2.97l.42 8.64-1.3 1.8H10.1l-3.28-4.2L4.7 13.1l2.25-1.76 2.62 1.48z'
        fill='currentColor'
      />
      <path d='M17.7 14.8v-3.09a2.01 2.01 0 1 0-4.02 0v3.1' stroke='currentColor' />
      <path
        d='M17.7 14.46v-1.04a2.01 2.01 0 0 1 4.03 0v4.05c0 2.42-1.42 4.53-1.42 4.53'
        stroke='currentColor'
      />
      <path d='M13.68 13.43V6.21a2.01 2.01 0 0 0-4.03 0v7.83' stroke='currentColor' />
      <path
        d='m9.65 14.15-.98-1.69a2.17 2.17 0 0 0-2.97-.8 2.1 2.1 0 0 0-.9 2.65 31 31 0 0 0 2.1 4.13 40 40 0 0 0 2.75 3.52'
        stroke='currentColor'
      />
    </svg>
  )
}
