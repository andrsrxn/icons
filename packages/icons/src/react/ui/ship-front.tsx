import type { Icon } from './types'

export const IconShipFront: Icon = ({
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
      data-slot='ui-icon-ship-front'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path opacity='.2' fill='currentColor' d='M6.54 5.15h10.85v5.29H6.54z' />
      <path
        d='M17.93 11.49V8.8c0-1.88 0-2.83-.59-3.41s-1.53-.59-3.41-.59h-3.86c-1.88 0-2.82 0-3.41.59-.59.58-.59 1.53-.59 3.41v2.69'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m10.81 9.85-4.1 1.28c-1.6.5-2.4.74-2.8 1.46-.38.71-.18 1.44.23 2.9a12 12 0 0 0 1.05 2.53c.81 1.44 1.22 2.16 2.15 2.71.94.55 1.94.55 3.96.55h1.68c2.17 0 3.25 0 4.26-.66l.13-.1c.98-.7 1.29-1.53 1.91-3.19.2-.52.38-1.14.55-1.77.4-1.53.6-2.3.2-3-.38-.7-1.2-.95-2.81-1.45l-4.03-1.26c-.6-.18-.89-.27-1.19-.27s-.6.09-1.19.27M12 4.8V2.34m0 11.86V9.82'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
