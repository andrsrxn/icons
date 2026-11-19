import type { Icon } from './types'

export const IconExperimentX: Icon = ({
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
      data-slot='icon-ui-experiment-x'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='m3.88 16.5 1.58-2.08a2 2 0 0 1 1.72-.78l1.73.11q.27.02.52.1c.83.27 3.52 1.08 5.52 1.08.52 0 1.1-.12 1.64-.27.99-.28 2.1.05 2.63.93l.58.97a2 2 0 0 1-.29 2.42l-2.6 2.67a2 2 0 0 1-1.43.61H6.64a2 2 0 0 1-1.81-1.16l-1.18-2.55a2 2 0 0 1 .23-2.05'
        fill='currentColor'
      />
      <path
        d='M8.66 2.2v5.03c0 1.24 0 1.86-.18 2.45-.18.58-.54 1.09-1.24 2.1l-3.11 4.5a3.82 3.82 0 0 0 3.14 6h5.34M15.3 2.2v5.01c0 1.25 0 1.87.19 2.45.18.59.54 1.1 1.25 2.12l1.56 2.24.41.64'
        stroke='currentColor'
      />
      <path
        d='M5.36 14.65a6.5 6.5 0 0 1 3.76-1.08c1.38 0 2.82.81 4.41 1.18'
        stroke='currentColor'
      />
      <path d='M6.2 1.8h11.6' stroke='currentColor' />
      <path d='m16.11 17 5.48 5.47' stroke='currentColor' />
      <path d='m16.1 22.47 5.48-5.48' stroke='currentColor' />
    </svg>
  )
}
