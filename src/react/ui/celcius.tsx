import type { Icon } from './types'

export const IconCelcius: Icon = ({
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
      data-slot='celcius'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle opacity='.2' cx='5.94' cy='6.64' r='2.18' fill='currentColor' />
      <circle cx='5.94' cy='6.64' r='2.18' stroke='currentColor' strokeWidth='1.5' />
      <path
        d='M20 5.04c-1.15-.8-2.88-.8-2.88-.8-3.76 0-6.81 3.53-6.81 7.88S13.36 20 17.11 20c0 0 1.93 0 2.89-.67'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
