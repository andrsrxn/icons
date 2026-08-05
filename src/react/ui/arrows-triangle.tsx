import type { Icon } from './types'

export const IconArrowsTriangle: Icon = ({
  size = 24,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='arrows-triangle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='m12.668 8.504 1.739.659c.867.328 1.301.493 1.672.325m1.522-3.212-.658 1.743c-.328.868-.492 1.302-.864 1.47m0 0L14.021 6.02c-.812-1.406-1.218-2.11-1.827-2.11s-1.015.704-1.827 2.11L8.322 9.563M3.484 12.56l1.796-.499c.893-.248 1.34-.372 1.695-.172.354.2.478.648.726 1.541l.496 1.793M6.975 11.89l-2.088 3.623c-.812 1.406-1.218 2.11-.914 2.637.305.527 1.117.527 2.74.527h3.515m5.055-2.707-1.316 1.314c-.657.655-.985.983-.986 1.39m2.302 2.71-1.318-1.318c-.656-.656-.984-.984-.983-1.392m0 0 4.693.003c1.624 0 2.436 0 2.74-.527.305-.528-.101-1.23-.913-2.637l-2.225-3.623'
      />
    </svg>
  )
}
