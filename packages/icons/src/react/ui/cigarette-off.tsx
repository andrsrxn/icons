import type { Icon } from './types'

export const IconCigaretteOff: Icon = ({
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
      data-slot='ui-icon-cigarette-off'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='2.79'
        y='11.17'
        width='4.89'
        height='4.97'
        rx='1.5'
        fill='currentColor'
      />
      <rect
        x='2.69'
        y='11.17'
        width='18.61'
        height='4.97'
        rx='1.5'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M7.68 16.15v-4.98m8.66-7.4.5.6c.44.51.4 1.27-.1 1.73-.53.5-.54 1.34 0 1.84l.42.4m2.87-4.57.5.6c.44.51.39 1.27-.1 1.73-.53.5-.54 1.34 0 1.84l.42.4M3.3 3.3l17.4 17.4'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
