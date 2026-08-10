import type { Icon } from './types'

export const IconChartBubble: Icon = ({
  size = 24,
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
      data-slot='chart-bubble'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle
        opacity='.2'
        cx='9.69'
        cy='8.01'
        r='2.32'
        transform='rotate(30 9.69 8)'
        fill='currentColor'
      />
      <circle
        opacity='.2'
        cx='16.5'
        cy='13.13'
        r='3.16'
        transform='rotate(30 16.5 13.13)'
        fill='currentColor'
      />
      <circle
        opacity='.2'
        cx='8.91'
        cy='15.2'
        r='1.6'
        transform='rotate(30 8.91 15.2)'
        fill='currentColor'
      />
      <circle
        cx='9.69'
        cy='8.01'
        r='2.32'
        transform='rotate(30 9.69 8)'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <circle
        cx='16.68'
        cy='13.23'
        r='3.16'
        transform='rotate(30 16.68 13.23)'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <circle
        cx='8.91'
        cy='15.2'
        r='1.6'
        transform='rotate(30 8.91 15.2)'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M4 4v14.61c0 .83.67 1.5 1.5 1.5H20'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
