import type { Icon } from './types'

export const IconHexagon: Icon = ({
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
      data-slot='ui-icon-hexagon'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M10.1 3.17c.93-.5 1.4-.76 1.9-.76s.97.26 1.9.76l2.44 1.32 2.36 1.45c.9.55 1.35.83 1.6 1.27s.27.96.3 2.02l.08 2.77-.08 2.77c-.03 1.06-.05 1.58-.3 2.02s-.7.72-1.6 1.27l-2.36 1.45-2.44 1.32c-.93.5-1.4.76-1.9.76s-.97-.26-1.9-.76l-2.44-1.32-2.36-1.45c-.9-.55-1.35-.83-1.6-1.27s-.27-.96-.3-2.02L3.32 12l.08-2.77c.03-1.06.05-1.58.3-2.02s.7-.72 1.6-1.27l2.36-1.45z'
        fill='currentColor'
      />
      <path
        d='M10.03 3.26c.96-.55 1.44-.82 1.97-.82s1 .27 1.97.82l2.32 1.31 2.3 1.35c.95.56 1.43.84 1.69 1.3s.27 1.01.28 2.12l.02 2.66-.02 2.66c-.01 1.11-.02 1.66-.28 2.12s-.74.74-1.7 1.3l-2.3 1.35-2.3 1.31c-.97.55-1.45.82-1.98.82s-1-.27-1.97-.82L7.7 19.43l-2.3-1.35c-.95-.56-1.43-.84-1.69-1.3s-.27-1.01-.28-2.12L3.42 12l.02-2.66c.01-1.11.02-1.66.28-2.12s.74-.74 1.7-1.3l2.3-1.35z'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
