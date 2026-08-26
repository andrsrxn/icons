import type { Icon } from './types'

export const IconCrown: Icon = ({
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
      data-slot='ui-icon-crown'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='3.46'
        y='16.41'
        width='16.62'
        height='4.72'
        rx='1.5'
        fill='currentColor'
      />
      <rect
        x='3.46'
        y='16.41'
        width='16.62'
        height='4.72'
        rx='1.5'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m5.47 16-1.96-5c-.7-1.77-1.04-2.66-.72-3.1a1 1 0 0 1 .35-.3c.48-.25 1.31.22 2.97 1.17.73.42 1.1.63 1.44.57a1 1 0 0 0 .3-.1c.31-.16.48-.54.82-1.31L9.9 5.14c.8-1.82 1.2-2.74 1.87-2.73.65 0 1.04.92 1.81 2.77l1.08 2.6c.4.93.6 1.4 1 1.55.42.15.87-.08 1.77-.55l.2-.1c2-1.04 2.99-1.56 3.5-1.1.52.47.11 1.5-.71 3.6l-1.89 4.78'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M12.73 12.51a.73.73 0 1 1-1.46 0 .73.73 0 0 1 1.46 0'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
