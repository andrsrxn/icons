import type { Icon } from './types'

export const IconCleaningBrush: Icon = ({
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
      data-slot='ui-icon-cleaning-brush'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect opacity='.2' x='5.47' y='8.43' width='13.07' height='4.47' rx='2' fill='currentColor' />
      <rect
        x='5.47'
        y='8.43'
        width='13.07'
        height='4.47'
        rx='1'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M7.05 12.9a10 10 0 0 0-.06 3.36c-.43 2.57-.65 3.86-.05 4.57.6.7 1.77.7 4.13.7h1.95c2.33 0 3.5 0 4.1-.7s.39-1.96-.03-4.48l-.06-.47c-.23-1.88 0-2.98 0-2.98M10 8.43V4.45q0 0 0 0c0-1.1.9-2 2-2q0 0 0 0v0q0 0 0 0a2 2 0 0 1 2 2q0 0 0 0v3.98zm.2 12.92v-3.67m3.6 3.67v-2.2'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
