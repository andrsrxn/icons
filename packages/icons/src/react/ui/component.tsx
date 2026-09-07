import type { Icon } from './types'

export const IconComponent: Icon = ({
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
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-component'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={isLabelled && title && !ariaLabel ? 'component-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? <title id={'component-title'}>{title}</title> : null}
      <rect
        opacity='.2'
        x='12'
        y='2'
        width='5.66'
        height='5.66'
        rx='1'
        transform='rotate(45 12 2)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        x='12'
        y='14'
        width='5.66'
        height='5.66'
        rx='1'
        transform='rotate(45 12 14)'
        fill='currentColor'
      />
      <rect
        x='12'
        y='2'
        width='5.66'
        height='5.66'
        rx='1'
        transform='rotate(45 12 2)'
        stroke='currentColor'
      />
      <rect
        x='12'
        y='14'
        width='5.66'
        height='5.66'
        rx='1'
        transform='rotate(45 12 14)'
        stroke='currentColor'
      />
      <rect
        opacity='.2'
        x='2'
        y='12'
        width='5.66'
        height='5.66'
        rx='1'
        transform='rotate(-45 2 12)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        x='14'
        y='12'
        width='5.66'
        height='5.66'
        rx='1'
        transform='rotate(-45 14 12)'
        fill='currentColor'
      />
      <rect
        x='2'
        y='12'
        width='5.66'
        height='5.66'
        rx='1'
        transform='rotate(-45 2 12)'
        stroke='currentColor'
      />
      <rect
        x='14'
        y='12'
        width='5.66'
        height='5.66'
        rx='1'
        transform='rotate(-45 14 12)'
        stroke='currentColor'
      />
    </svg>
  )
}
