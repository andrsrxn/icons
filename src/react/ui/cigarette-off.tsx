import type { Icon } from './types'

export const IconCigaretteOff: Icon = ({
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
      data-slot='cigarette-off'
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
      <path
        d='M4.03 2.97a.75.75 0 0 0-1.06 1.06l.53-.53zm15.94 18.06a.75.75 0 1 0 1.06-1.06l-.53.53zM3.5 3.5l-.53.53 8.5 8.5L12 12l.53-.53-8.5-8.5zM12 12l-.53.53 8.5 8.5.53-.53.53-.53-8.5-8.5z'
        fill='currentColor'
      />
    </svg>
  )
}
