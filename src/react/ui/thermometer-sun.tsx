import type { Icon } from './types'

export const IconThermometerSun: Icon = ({
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
      data-slot='thermometer-sun'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M14.38 13.96V5.25a1.7 1.7 0 0 1 3.4 0v8.71s1.47 1.6 1.47 2.99a3.17 3.17 0 1 1-6.34 0c0-1.38 1.47-2.99 1.47-2.99'
        fill='currentColor'
      />
      <path
        d='M14.24 14.28a3.42 3.42 0 1 0 3.68 0m-.06-.08v-9a1.78 1.78 0 0 0-3.56 0v9'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path d='M16.5 17.08a.42.42 0 1 1-.84 0 .42.42 0 0 1 .84 0' fill='currentColor' />
      <path
        d='M16.5 17.08a.42.42 0 1 1-.84 0 .42.42 0 0 1 .84 0ZM10.72 6.42l-.26-1.63M7.27 8.63l-1.34-.98m.32 5.17-1.63.25m2.9 4.77.98-1.34m5.8-6.02a2.88 2.88 0 1 0-.22 3.5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
