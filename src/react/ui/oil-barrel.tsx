import type { Icon } from './types'

export const IconOilBarrel: Icon = ({
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
      data-slot='oil-barrel'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M13.11 11.25a1.11 1.11 0 0 1-2.22 0c0-.4.44-.99.77-1.37.18-.21.5-.21.68 0 .33.38.77.98.77 1.37m-7.01 2.1 5.9.9 5.74-.9v5.98L12 20.68l-5.9-1.35z'
        fill='currentColor'
      />
      <ellipse cx='12' cy='5.7' rx='6.64' ry='2.04' stroke='currentColor' strokeWidth='1.5' />
      <ellipse opacity='.2' cx='12' cy='5.7' rx='6.64' ry='2.04' fill='currentColor' />
      <path
        d='M18.64 12.2c0 1.26-2.97 2.28-6.64 2.28s-6.64-1.02-6.64-2.28m13.28 5.99c0 1.26-2.97 2.28-6.64 2.28s-6.64-1.02-6.64-2.28M6.1 6.84V19.1M17.74 6.84V19.1'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        d='M13.11 11.25a1.11 1.11 0 0 1-2.22 0c0-.4.44-.99.77-1.37.18-.21.5-.21.68 0 .33.38.77.98.77 1.37Z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
    </svg>
  )
}
