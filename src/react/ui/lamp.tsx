import type { Icon } from './types'

export const IconLamp: Icon = ({
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
      data-slot='lamp'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M6.46 5.46c.59-.83.88-1.24 1.31-1.47s.94-.22 1.96-.22h4.6c1.02 0 1.53 0 1.96.22.44.23.73.65 1.32 1.49l1 1.43c.95 1.38 1.44 2.07 1.16 2.6s-1.13.54-2.8.54h-9.9c-1.7 0-2.54 0-2.82-.54s.21-1.23 1.19-2.61z'
        fill='currentColor'
      />
      <path
        d='M12 20.37V10.05m2.92 10.32H9.08'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        d='M6.46 5.46c.59-.83.88-1.24 1.31-1.47s.94-.22 1.96-.22h4.6c1.02 0 1.53 0 1.96.22.44.23.73.65 1.32 1.49l1 1.43c.95 1.38 1.44 2.07 1.16 2.6s-1.13.54-2.8.54h-9.9c-1.7 0-2.54 0-2.82-.54s.21-1.23 1.19-2.61z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
    </svg>
  )
}
