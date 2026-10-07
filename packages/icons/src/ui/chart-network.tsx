import type { Icon } from './types'

export const IconChartNetwork: Icon = ({
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
      data-slot='icon-ui-chart-network'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M21.24 21.33H10.76c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83V2.63'
        stroke='currentColor'
      />
      <circle
        opacity='.2'
        cx='9.15'
        cy='6.45'
        r='2.34'
        transform='rotate(90 9.15 6.45)'
        fill='currentColor'
      />
      <circle
        opacity='.2'
        cx='10.19'
        cy='15.58'
        r='2.34'
        transform='rotate(90 10.19 15.58)'
        fill='currentColor'
      />
      <circle
        opacity='.2'
        cx='18.51'
        cy='11.42'
        r='2.34'
        transform='rotate(90 18.5 11.42)'
        fill='currentColor'
      />
      <circle cx='9.15' cy='6.45' r='2.34' transform='rotate(90 9.15 6.45)' stroke='currentColor' />
      <circle
        cx='10.19'
        cy='15.58'
        r='2.34'
        transform='rotate(90 10.19 15.58)'
        stroke='currentColor'
      />
      <circle
        cx='18.51'
        cy='11.42'
        r='2.34'
        transform='rotate(90 18.5 11.42)'
        stroke='currentColor'
      />
      <path d='m12.53 14.86 3.9-2.2' stroke='currentColor' />
      <path d='m9.32 8.8.42 4.44' stroke='currentColor' />
    </svg>
  )
}
