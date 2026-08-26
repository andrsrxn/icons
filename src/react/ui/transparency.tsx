import type { Icon } from './types'

export const IconTransparency: Icon = ({
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
      data-slot='ui-icon-transparency'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M5.36 18.64c-2.62-1.93-2.91-6.35-2.74-8.32l10.49 10.54c-1.5.06-5.13-.29-7.75-2.22m0-13.28 5.05-2.22 10.45 11.07-2.22 4.43z'
        fill='currentColor'
      />
      <circle cx='12' cy='12' r='9.41' stroke='currentColor' strokeWidth={strokeWidth} />
      <path
        d='m2.9 10.18 11.01 11M5.56 5.68l12.85 12.85M10 2.96 21.14 14.1'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
