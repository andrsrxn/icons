import type { Icon } from './types'

export const IconEraser: Icon = ({
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
      data-slot='eraser'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='m16.02 12.4-4.45-4.44a2 2 0 0 1 0-2.82l.62-.63a2 2 0 0 1 2.83 0l4.45 4.44a2 2 0 0 1 0 2.83l-.62.63a2 2 0 0 1-2.83 0'
        fill='currentColor'
      />
      <path
        d='m10.89 5.6-.1.1m0 0-.73.73m0 0-4.48 4.48c-1.31 1.32-1.97 1.97-1.97 2.79s.65 1.47 1.97 2.8l1.83 1.83c1.32 1.32 1.97 1.97 2.8 1.98.8 0 1.47-.66 2.79-1.98l4.48-4.48.73-.73c1.32-1.32 1.97-1.98 1.97-2.8s-.65-1.47-1.97-2.78L16.37 5.7c-1.31-1.32-1.97-1.97-2.79-1.97-.81 0-1.47.65-2.79 1.97m-.73.73 7.42 7.42'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
