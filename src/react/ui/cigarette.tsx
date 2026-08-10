import type { Icon } from './types'

export const IconCigarette: Icon = ({
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
      data-slot='cigarette'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='3.66'
        y='11.06'
        width='4.43'
        height='4.5'
        rx='1.5'
        fill='currentColor'
      />
      <rect
        x='3.57'
        y='11.06'
        width='16.86'
        height='4.5'
        rx='1.5'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M8.09 15.56v-4.5m7.84-6.7.46.54c.39.46.35 1.15-.1 1.57a1.14 1.14 0 0 0 0 1.66l.38.36m2.6-4.13.46.54c.39.46.35 1.15-.1 1.57a1.14 1.14 0 0 0 0 1.66l.39.36'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
