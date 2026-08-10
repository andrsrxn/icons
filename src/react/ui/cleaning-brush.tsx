import type { Icon } from './types'

export const IconCleaningBrush: Icon = ({
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
      data-slot='cleaning-brush'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='6.19'
        y='8.83'
        width='11.62'
        height='3.97'
        rx='1.99'
        fill='currentColor'
      />
      <rect
        x='6.19'
        y='8.83'
        width='11.62'
        height='3.97'
        rx='1.5'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M7.6 12.8h8.87v2.65c0 .98.21 2.72.37 3.88.07.54.1.8-.04.98s-.42.17-.96.17H8.19c-.55 0-.83 0-.98-.17s-.1-.45-.02-1c.17-1.15.4-2.88.4-3.86z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
      <path d='M10.6 8.83V4.9a1.4 1.4 0 1 1 2.8 0v3.93z' stroke='currentColor' strokeWidth='1.5' />
      <path
        d='M10.34 20.37v-2.98m3.37 2.92v-1.78'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
