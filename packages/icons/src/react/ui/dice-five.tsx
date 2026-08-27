import type { Icon } from './types'

export const IconDiceFive: Icon = ({
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
      data-slot='ui-icon-dice-five'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        width='18.78'
        height='18.78'
        rx='3'
        transform='matrix(0 -1 -1 0 21.4 21.4)'
        fill='currentColor'
      />
      <rect
        width='18.78'
        height='18.78'
        rx='3'
        transform='matrix(0 -1 -1 0 21.4 21.4)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M12.9 12a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0m4.8-4.9a.9.9 0 1 1-1.81 0 .9.9 0 0 1 1.81 0m.1 9.8a.9.9 0 1 1-1.82 0 .9.9 0 0 1 1.81 0m-9.77 0a.9.9 0 1 1-1.81 0 .9.9 0 0 1 1.81 0m0-9.8a.9.9 0 1 1-1.81 0 .9.9 0 0 1 1.81 0'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
