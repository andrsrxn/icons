import type { Icon } from './types'

export const IconKeyboard: Icon = ({
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
      data-slot='ui-icon-keyboard'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        width='12'
        height='18.81'
        rx='2'
        transform='matrix(0 -1 -1 0 21.4 18)'
        fill='currentColor'
      />
      <rect
        width='12'
        height='18.81'
        rx='2'
        transform='matrix(0 -1 -1 0 21.4 18)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M6.5 9.93a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 3.77a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m3.96-3.77a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m3.96 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m3.97 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 3.77a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path d='M14.54 13.76H9.46' stroke='currentColor' strokeWidth={strokeWidth} />
    </svg>
  )
}
