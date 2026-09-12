import type { Icon } from './types'

export const IconComponent: Icon = ({
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
      data-slot='icon-ui-component'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='12'
        y='1.37'
        width='6.01'
        height='6.01'
        rx='1'
        transform='rotate(45 12 1.37)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        x='12'
        y='14.12'
        width='6.01'
        height='6.01'
        rx='1'
        transform='rotate(45 12 14.12)'
        fill='currentColor'
      />
      <rect
        x='12'
        y='1.37'
        width='6.01'
        height='6.01'
        rx='1'
        transform='rotate(45 12 1.37)'
        stroke='currentColor'
      />
      <rect
        x='12'
        y='14.12'
        width='6.01'
        height='6.01'
        rx='1'
        transform='rotate(45 12 14.12)'
        stroke='currentColor'
      />
      <rect
        opacity='.2'
        x='1.37'
        y='12'
        width='6.01'
        height='6.01'
        rx='1'
        transform='rotate(-45 1.37 12)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        x='14.12'
        y='12'
        width='6.01'
        height='6.01'
        rx='1'
        transform='rotate(-45 14.12 12)'
        fill='currentColor'
      />
      <rect
        x='1.37'
        y='12'
        width='6.01'
        height='6.01'
        rx='1'
        transform='rotate(-45 1.37 12)'
        stroke='currentColor'
      />
      <rect
        x='14.12'
        y='12'
        width='6.01'
        height='6.01'
        rx='1'
        transform='rotate(-45 14.12 12)'
        stroke='currentColor'
      />
    </svg>
  )
}
