import type { Icon } from './types'

export const IconMouseRightClick: Icon = ({
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
      data-slot='ui-icon-mouse-right-click'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path opacity='.2' d='M6 12.3h11.9v3.36a5.94 5.94 0 1 1-11.89 0z' fill='currentColor' />
      <path
        opacity='.2'
        d='M11.94 12.97v-1.6c0-.64.2-1.28.58-1.81l.15-.2a2.8 2.8 0 0 0-.1-3.4c-.4-.5-.63-1.12-.63-1.76V2.6A6.06 6.06 0 0 1 18 8.64v4.32z'
        fill='currentColor'
      />
      <rect
        x='6'
        y='2.4'
        width='11.88'
        height='19.21'
        rx='5.94'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path d='M6 12.45h11.89' stroke='currentColor' strokeWidth={strokeWidth} />
      <rect
        x='10.35'
        y='5.46'
        width='3.31'
        height='4.65'
        rx='1.65'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M11.98 12.45V10.1m0-4.68V3.03m8.62 2.84 1.85.13m-3.22-2.93 1.04-1.54'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
