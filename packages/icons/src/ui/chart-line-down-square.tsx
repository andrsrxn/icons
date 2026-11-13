import type { Icon } from './types'

export const IconChartLineDownSquare: Icon = ({
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
      data-slot='icon-ui-chart-line-down-square'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M13.7 21.58c3.77 0 5.66 0 6.83-1.17s1.17-3.06 1.17-6.83v-3.16c0-3.77 0-5.66-1.17-6.83s-3.06-1.17-6.83-1.17h-3.17c-3.77 0-5.65 0-6.82 1.17-1.18 1.17-1.18 3.06-1.18 6.83v3.16c0 3.77 0 5.66 1.18 6.83 1.17 1.17 3.05 1.17 6.82 1.17z'
        fill='currentColor'
      />
      <path
        d='M2.53 13.58v-3.16c0-3.77 0-5.66 1.18-6.83 1.17-1.17 3.05-1.17 6.82-1.17h3.17c3.77 0 5.66 0 6.83 1.17s1.17 3.06 1.17 6.83v3.16c0 3.77 0 5.66-1.17 6.83s-3.06 1.17-6.83 1.17h-3.17c-3.77 0-5.65 0-6.82-1.17-1.18-1.17-1.18-3.06-1.18-6.83'
        stroke='currentColor'
      />
      <path
        d='m6.23 9.09 1.72 2.55h0c.6.9.9 1.34 1.34 1.36s.79-.38 1.49-1.2h0l1.1-1.29c.7-.81 1.04-1.22 1.48-1.2s.74.47 1.34 1.36l3.3 4.88'
        stroke='currentColor'
      />
    </svg>
  )
}
