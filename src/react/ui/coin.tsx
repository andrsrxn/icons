import type { Icon } from './types'

export const IconCoin: Icon = ({
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
      data-slot='ui-icon-coin'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <ellipse
        opacity='.2'
        cx='10.25'
        cy='12'
        rx='9.43'
        ry='4.57'
        transform='rotate(90 10.25 12)'
        fill='currentColor'
      />
      <ellipse
        cx='10.25'
        cy='12'
        rx='9.43'
        ry='4.57'
        transform='rotate(90 10.25 12)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M14.57 21.43c2.52 0 4.57-4.22 4.57-9.43s-2.05-9.43-4.57-9.43m-4.32 0h4.32M14 6.22h4M15.14 12h4M14 17.76h4m-7.75 3.67h4.32'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
