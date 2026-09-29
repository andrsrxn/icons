import type { Icon } from './types'

export const IconBinoculars: Icon = ({
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
      data-slot='icon-ui-binoculars'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M4.25 9.42c0 2.27.4.81 2.96 1.56 2.06 1.02 2.76.26 2.76-2.01S8.85 5.3 7.2 5.3 4.95 7.1 4.25 9.42'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M19.85 9.42c0 2.27-.4.81-2.96 1.56-2.06 1.02-2.75.26-2.75-2.01s1.11-3.67 2.75-3.67c1.63 0 2.26 1.8 2.96 4.12'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M14.28 11.14c0 2.28.23 2.34-2.22 2.04-1.89.32-2.36-.05-2.36-2.33 0-2.27.73-3.56 2.36-3.56 1.64 0 1.97 1.1 2.22 3.85'
        fill='currentColor'
      />
      <path
        d='M1.63 14.52a4.1 4.1 0 0 0 4.12 4.11 4.12 4.12 0 1 0-4.12-4.11'
        stroke='currentColor'
      />
      <path
        d='M14.14 14.52a4.1 4.1 0 0 0 4.12 4.11 4.12 4.12 0 1 0-4.12-4.11'
        stroke='currentColor'
      />
      <path d='M2.6 11.83 5.7 6.4a2.21 2.21 0 0 1 4.12 1.06l.1 6.59' stroke='currentColor' />
      <path d='M21.4 11.83 18.32 6.4a2.23 2.23 0 0 0-4.17 1.1v6.45' stroke='currentColor' />
      <path d='M9.86 13.99c.69-.67 1.25-.9 2.14-.9s1.45.23 2.14.9' stroke='currentColor' />
      <path d='M9.86 8.19c.69-.67 1.25-.9 2.14-.9s1.45.23 2.14.9' stroke='currentColor' />
    </svg>
  )
}
