import type { Icon } from './types'

export const IconChartBubble: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-chart-bubble'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle
        opacity='.2'
        cx='9.09'
        cy='7.56'
        r='2.53'
        transform='rotate(30 9.1 7.56)'
        fill='currentColor'
      />
      <circle
        opacity='.2'
        cx='16.53'
        cy='13.15'
        r='3.45'
        transform='rotate(30 16.53 13.15)'
        fill='currentColor'
      />
      <circle
        opacity='.2'
        cx='8.25'
        cy='15.41'
        r='1.74'
        transform='rotate(30 8.25 15.41)'
        fill='currentColor'
      />
      <circle
        cx='9.09'
        cy='7.56'
        r='2.53'
        transform='rotate(30 9.1 7.56)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <circle
        cx='16.72'
        cy='13.26'
        r='3.45'
        transform='rotate(30 16.72 13.26)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <circle
        cx='8.25'
        cy='15.41'
        r='1.74'
        transform='rotate(30 8.25 15.41)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M20.58 21.32h-9.83c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83v-10'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
