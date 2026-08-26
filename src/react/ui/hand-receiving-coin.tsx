import type { Icon } from './types'

export const IconHandReceivingCoin: Icon = ({
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
      data-slot='ui-icon-hand-receiving-coin'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect opacity='.2' x='2.76' y='12.94' width='3.81' height='7.52' rx='1' fill='currentColor' />
      <path
        d='M6.57 19.2s1.1.86 2.67 1.22c3.14.72 4.74.52 7.52-.44 2.03-.7 3.63-2.55 4.44-3.66.38-.52.37-1.21.04-1.76a1.88 1.88 0 0 0-2.82-.42 25 25 0 0 1-3.53 2.56c-.74.43-2.27.34-3.73.34m3.73-.34c.6-1.49.43-2.68-.23-2.91a11 11 0 0 0-3.83-.6c-3.55 0-4.26.83-4.26.83'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        x='2.76'
        y='12.94'
        width='3.81'
        height='7.52'
        rx='1'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <ellipse
        opacity='.2'
        cx='14.43'
        cy='6.5'
        rx='3.93'
        ry='2.04'
        transform='rotate(90 14.43 6.5)'
        fill='currentColor'
      />
      <ellipse
        cx='14.19'
        cy='6.5'
        rx='3.93'
        ry='1.8'
        transform='rotate(90 14.2 6.5)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M16.61 10.44c1.13 0 2.04-1.76 2.04-3.94s-.91-3.93-2.04-3.93m-2.11 0h1.8m.31 2.58h1.79m-1.79 2.7h1.79m-4.1 2.59h2.24'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
