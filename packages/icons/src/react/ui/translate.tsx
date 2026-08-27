import type { Icon } from './types'

export const IconTranslate: Icon = ({
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
      data-slot='ui-icon-translate'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M3 5.68h11.5m-5.75 0V3.15M5.97 8.92l7.3 7.3m-8.26-1.08c1.97-1.1 3.3-1.92 4.7-3.68 1.55-1.94 1.9-3.33 2.5-5.73m-.35 15.12 2.7-7.5c.8-2.18 1.2-3.27 1.9-3.27s1.1 1.1 1.87 3.29L21 20.85m-1.87-4.44h-5.3'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
