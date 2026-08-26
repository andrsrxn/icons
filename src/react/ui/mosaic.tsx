import type { Icon } from './types'

export const IconMosaic: Icon = ({
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
      data-slot='ui-icon-mosaic'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M4.74 2.74h14.52c.94 0 1.41 0 1.7.3.3.29.3.76.3 1.7v7.06c0 1.44 0 2.16-.47 2.45s-1.12-.02-2.4-.65L3.86 6.55c-.55-.27-.82-.4-.98-.65-.15-.24-.15-.54-.15-1.15 0-.95 0-1.42.3-1.72.29-.29.76-.29 1.7-.29'
        fill='currentColor'
      />
      <rect
        width='18.52'
        height='18.52'
        rx='3'
        transform='scale(1 -1)rotate(90 21.26 0)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path d='m3 6 18.26 9M8 21l6-9.42' stroke='currentColor' strokeWidth={strokeWidth} />
    </svg>
  )
}
