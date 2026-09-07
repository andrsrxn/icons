import type { Icon } from './types'

export const IconMeasure: Icon = ({
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
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-measure'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={isLabelled && title && !ariaLabel ? 'measure-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? <title id={'measure-title'}>{title}</title> : null}
      <rect
        opacity='.2'
        width='18.71'
        height='8.91'
        rx='2'
        transform='matrix(1 0 0 -1 2.65 19.46)'
        fill='currentColor'
      />
      <path d='M3 6.18h18M3 7.92V4.54m18 3.38V4.54' stroke='currentColor' />
      <rect
        width='18.71'
        height='8.91'
        rx='2'
        transform='matrix(1 0 0 -1 2.65 19.46)'
        stroke='currentColor'
      />
      <path d='M12.3 10.6v3.55m-4.36-3.61v3.61m8.71-3.61v3.61' stroke='currentColor' />
    </svg>
  )
}
