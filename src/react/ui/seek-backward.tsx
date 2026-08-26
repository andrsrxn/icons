import type { Icon } from './types'

export const IconSeekBackward: Icon = ({
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
      data-slot='ui-icon-seek-backward'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='12.34'
        y='9.19'
        width='3.97'
        height='6.86'
        rx='1.98'
        fill='currentColor'
      />
      <path
        d='M4.76 5.51a10.4 10.4 0 0 1 9.4-2.06A9.01 9.01 0 1 1 3.48 16.28'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        x='12.34'
        y='9.19'
        width='3.97'
        height='6.86'
        rx='1.98'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M7.05 7.3C5.32 6.97 4.46 6.8 4 6.2l-.12-.18c-.4-.66-.23-1.52.1-3.25m2.68 8.56 1.3-1.18c.71-.65 1.07-.98 1.37-.85s.3.62.3 1.6V16'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
