import type { Icon } from './types'

export const IconChartBubble: Icon = ({
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
      data-slot='icon-ui-chart-bubble'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle
        opacity='.2'
        cx='9.34'
        cy='6.83'
        r='2.71'
        transform='rotate(30 9.34 6.83)'
        fill='currentColor'
      />
      <circle
        opacity='.2'
        cx='17.29'
        cy='12.81'
        r='3.69'
        transform='rotate(30 17.3 12.81)'
        fill='currentColor'
      />
      <circle
        opacity='.2'
        cx='8.43'
        cy='15.23'
        r='1.86'
        transform='rotate(30 8.43 15.23)'
        fill='currentColor'
      />
      <circle cx='9.34' cy='6.83' r='2.71' transform='rotate(30 9.34 6.83)' stroke='currentColor' />
      <circle
        cx='17.5'
        cy='12.93'
        r='3.69'
        transform='rotate(30 17.5 12.93)'
        stroke='currentColor'
      />
      <circle
        cx='8.43'
        cy='15.23'
        r='1.86'
        transform='rotate(30 8.43 15.23)'
        stroke='currentColor'
      />
      <path
        d='M21.43 21.32H10.75c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83V2.67'
        stroke='currentColor'
      />
    </svg>
  )
}
