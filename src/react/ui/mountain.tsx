import type { Icon } from './types'

export const IconMountain: Icon = ({
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
      data-slot='mountain'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path opacity='.2' d='M7.19 9.28h4.84l2.09.74 2.74-.74 2.7 10.5H4.5z' fill='#000' />
      <path
        d='M12 3.68c3.77 0 6.05 7.22 7.16 12.15.45 2 .67 3 .07 3.75s-1.67.75-3.81.75H8.76c-2.22 0-3.33 0-3.93-.77-.6-.78-.33-1.81.2-3.88 1.27-4.92 3.66-12 6.97-12Z'
        stroke='#000'
        strokeWidth='1.5'
      />
      <path
        d='M16.61 9.28s-1.42 1.13-2.68 1.13c-1.4 0-2.23-1.34-3.6-1.34C8.77 9.07 7 10.1 7 10.1'
        stroke='#000'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
