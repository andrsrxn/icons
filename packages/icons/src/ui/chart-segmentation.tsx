import type { Icon } from './types'

export const IconChartSegmentation: Icon = ({
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
      data-slot='icon-ui-chart-segmentation'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M12 22.26c-2.38 0-5.76-1.45-7.8-3.5L12 12V1.74a10.26 10.26 0 0 1 0 20.52'
        fill='currentColor'
      />
      <circle cx='12' cy='12' r='10.26' stroke='currentColor' />
      <path d='m4.48 18.72 7.52-6.9m0 0V1.73m0 10.07 7.55 6.91' stroke='currentColor' />
      <path
        d='M8.65 7.16a.43.43 0 1 1-.87 0 .43.43 0 0 1 .87 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M15.74 7.16a.43.43 0 1 0 .87 0 .43.43 0 0 0-.87 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M6.62 11.57a.43.43 0 1 1-.87 0 .43.43 0 0 1 .87 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M17.78 11.57a.43.43 0 1 0 .87 0 .43.43 0 0 0-.87 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M12.87 18.29a.43.43 0 1 1-.87 0 .43.43 0 0 1 .87 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
