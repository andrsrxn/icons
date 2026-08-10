import type { Icon } from './types'

export const IconSubtitles: Icon = ({
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
      data-slot='subtitles'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='3.79'
        y='5.84'
        width='16.42'
        height='12.32'
        rx='2'
        fill='currentColor'
      />
      <rect
        x='3.79'
        y='5.84'
        width='16.42'
        height='12.32'
        rx='2'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M6.16 15.08h6.78M6.16 12h2.76m6.74 3.08h2.18M12 12h5.84'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
