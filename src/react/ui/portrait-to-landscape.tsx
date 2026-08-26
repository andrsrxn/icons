import type { Icon } from './types'

export const IconPortraitToLandscape: Icon = ({
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
      data-slot='ui-icon-portrait-to-landscape'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        width='18.39'
        height='8.9'
        rx='2'
        transform='matrix(0 -1 -1 0 11.64 21.15)'
        fill='currentColor'
      />
      <rect
        width='18.39'
        height='8.89'
        rx='3'
        transform='matrix(0 -1 -1 0 11.64 21.15)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M12.4 12.29h4.42c1.33 0 2 0 2.53.2a3 3 0 0 1 1.7 1.7c.2.53.2 1.2.2 2.53s0 2-.2 2.53a3 3 0 0 1-1.7 1.7c-.53.2-1.2.2-2.53.2H9.37m9.01-12.09v-.7c0-1.8 0-2.7-.54-3.28l-.1-.1c-.58-.54-1.47-.54-3.27-.54'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M20.8 7.88c-.89.89-1.33 1.33-1.86 1.47a2 2 0 0 1-1.02 0c-.52-.14-.96-.58-1.86-1.47'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
